import { useEffect, useState } from "react";

import { odeServices } from "edifice-ts-client";

import { useMockedData } from "../OdeClientProvider";

export default function useHasWorkflow(
  workflow: string | string[],
): (boolean | undefined) | Record<string, boolean> {
  const mock = useMockedData();

  const [state, setState] = useState<
    (boolean | undefined) | Record<string, boolean>
  >();

  useEffect(() => {
    let promise: Promise<boolean | Record<string, boolean>>;
    if (mock?.hasWorkflow) {
      if (typeof workflow === "string") {
        promise = mock.hasWorkflow(workflow);
      } else {
        throw "not.implemented.yet)";
      }
    } else {
      if (typeof workflow === "string") {
        promise = odeServices.rights().sessionHasWorkflowRight(workflow);
      } else {
        promise = odeServices.rights().sessionHasWorkflowRights(workflow);
      }
    }
    promise.then((response) => setState(response));
  }, [workflow, mock]);

  return state;
}
