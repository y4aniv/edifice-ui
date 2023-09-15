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
    (async () => {
      let response;
      if (typeof workflow === "string") {
        response = await (mock?.hasWorkflow
          ? mock.hasWorkflow
          : odeServices.rights().sessionHasWorkflowRight)(workflow);
      } else {
        await odeServices.rights().sessionHasWorkflowRights(workflow);
      }
      setState(response);
    })();
  }, [workflow, mock]);

  return state;
}
