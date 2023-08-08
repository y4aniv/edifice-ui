import { useCallback, useEffect, useState } from "react";

import { odeServices } from "edifice-ts-client";

import { useHasWorkflow } from "../useHasWorkflow";

const useConversation = (): {
  messages: number;
  msgLink: string;
  zimbraWorkflow: boolean | Record<string, boolean> | undefined;
} => {
  const zimbraWorkflow = useHasWorkflow(
    "fr.openent.zimbra.controllers.ZimbraController|view",
  );
  const zimbraPreauth = useHasWorkflow(
    "fr.openent.zimbra.controllers.ZimbraController|preauth",
  );

  /**
   * Count conversation app
   */
  const [messages, setMessages] = useState<number>(0);
  const [msgLink, setMsgLink] = useState<string>("");
  /**
   * Get message count for zimbra or chat app
   */
  const refreshMails = useCallback(async () => {
    if (zimbraWorkflow) {
      try {
        const response = await odeServices.http().get("/zimbra/count/INBOX", {
          queryParams: { unread: true, _: new Date().getTime() },
        });

        if (response.status !== 200) {
          setMessages(0);
        }

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        setMessages(0);
      }
    } else {
      try {
        const response = await odeServices
          .http()
          .get("/conversation/count/INBOX", {
            queryParams: { unread: true, _: new Date().getTime() },
          });

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        setMessages(0);
      }
    }
  }, [zimbraWorkflow]);

  const goToMessagerie = useCallback(() => {
    let messagerieLink = "";
    // FIXME This is the old-fashioned way of accessing preferences. Do not reproduce anymore (use edifice-ts-client lib instead)
    odeServices
      .http()
      .get("/userbook/preference/zimbra")
      .then((data: { preference: string }) => {
        try {
          if (
            data.preference
              ? JSON.parse(data.preference).modeExpert && zimbraPreauth
              : false
          ) {
            messagerieLink = "/zimbra/preauth";
          } else {
            messagerieLink = window.location.origin + "/zimbra/zimbra";
          }
        } catch (e) {
          messagerieLink = "/zimbra/zimbra";
        }
      });

    setMsgLink(messagerieLink);
  }, [zimbraPreauth]);

  useEffect(() => {
    (async () => {
      try {
        await refreshMails();
      } catch (error) {
        console.error(error);
      }
    })();
    goToMessagerie();
  }, [goToMessagerie, refreshMails]);

  return { messages, msgLink, zimbraWorkflow };
};

export default useConversation;
