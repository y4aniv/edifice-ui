import { useEffect, useState } from "react";

import { odeServices } from "edifice-ts-client";

export default function useHasWorkflow(
  workflow: string | string[],
): (boolean | undefined) | Record<string, boolean> {
  const [state, setState] = useState<
    (boolean | undefined) | Record<string, boolean>
  >();

  useEffect(() => {
    (async () => {
      let response;
      if (typeof workflow === "string") {
        response = await odeServices.rights().sessionHasWorkflowRight(workflow);
      } else {
        await odeServices.rights().sessionHasWorkflowRights(workflow);
      }
      setState(response);
    })();
  }, [workflow]);

  return state;
}
