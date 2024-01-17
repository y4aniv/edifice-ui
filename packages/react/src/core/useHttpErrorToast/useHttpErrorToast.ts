import React, { useEffect, useRef } from "react";

import { odeServices, LAYER_NAME } from "edifice-ts-client";

import { useToast } from "../..";

const useHttpErrorToast = () => {
  const message = useRef<string>();
  const toast = useToast();

  useEffect(() => {
    const unsubscribeFn = odeServices
      .notify()
      .events()
      .subscribe(LAYER_NAME.TRANSPORT, (event) => {
        message.current =
          event?.data?.payload?.error || event.data.response.statusText;
        toast.error(
          React.createElement("div", { children: [message.current] }),
        );
      });

    return unsubscribeFn;
  }, [toast]);

  return message.current;
};

export default useHttpErrorToast;
