import { createContext, useMemo, useContext } from "react";

import { UseQueryResult } from "@tanstack/react-query";
import {
  IUserInfo,
  IUserDescription,
  IWebApp,
  UserProfile,
  IGetConf,
  IGetSession,
} from "edifice-ts-client";

import { AppContext, AppProvider, AppProviderProps } from "./AppProvider";
import { useConf } from "../useConf";
import { useSession } from "../useSession";

export interface OdeContextProps {
  applications: IWebApp[] | undefined;
  confQuery: UseQueryResult<IGetConf>;
  currentApp: IWebApp | undefined;
  init: boolean;
  sessionQuery: UseQueryResult<IGetSession>;
  user: IUserInfo | any;
  userDescription: IUserDescription | undefined;
  userProfile: UserProfile | undefined;
}

const OdeClientContext = createContext<OdeContextProps | null>(null!);

export function OdeClientProvider({ children, params }: AppProviderProps) {
  const sessionQuery = useSession();
  const confQuery = useConf({ appCode: params.app });

  const init = confQuery?.isSuccess && sessionQuery?.isSuccess;

  const values = useMemo(
    () => ({
      applications: confQuery?.data?.applications,
      confQuery,
      currentApp: confQuery?.data?.currentApp,
      currentLanguage: sessionQuery?.data?.currentLanguage,
      init,
      sessionQuery,
      user: sessionQuery?.data?.user,
      userDescription: sessionQuery?.data?.userDescription,
      userProfile: sessionQuery?.data?.userProfile,
    }),
    [confQuery, init, sessionQuery],
  );

  return (
    <AppProvider params={params}>
      <OdeClientContext.Provider value={values}>
        {children}
      </OdeClientContext.Provider>
    </AppProvider>
  );
}

export function useOdeClient() {
  const appContext = useContext(AppContext);
  const context = useContext(OdeClientContext);

  if (!appContext || !context) {
    throw new Error(`Cannot be used outside of OdeClientProvider`);
  }
  return { ...appContext, ...context };
}
