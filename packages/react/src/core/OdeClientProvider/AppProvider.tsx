import {
  createContext,
  type ReactNode,
  useMemo,
  useContext,
  useEffect,
  useState,
} from "react";

import { App } from "edifice-ts-client";
import { useTranslation } from "react-i18next";

type SupportedLanguage = "de" | "en" | "es" | "fr" | "it" | "pt";

export interface AppProviderParams {
  /** Current application code, hard-coded in index.html file. */
  app: App;
  /** Truthy when the application manages resources from other applications. */
  alternativeApp?: boolean;
  /** CDN-related information. */
  cdnDomain?: string | null;
  /** Deployment-related information. */
  version?: string | null;
}

export interface AppProviderProps {
  /** React children of this provider. */
  children: ReactNode;
  /** Provider parameters, required by AppProvider. */
  params: AppProviderParams;
}

export interface AppContextProps {
  /** Current application code. */
  appCode: App;
  /** Current application name (translated for the current language). */
  appLabel: string;
  /** Truthy if this is not the main application. */
  alternativeApp?: boolean;
  /**
   * Current language code, read from index.html file and later from user's session.
   * Defaults to `fr`
   */
  currentLanguage?: string;
  /** CDN-related information. */
  cdnDomain?: string | null;
  /** Deployment-related information. */
  version?: string | null;
  /** Setter of the current language. */
  changeLanguage: (lang: SupportedLanguage) => void;
}

export const AppContext = createContext<AppContextProps | null>(null!);

export function AppProvider({ children, params }: AppProviderProps) {
  const [currentLanguage, changeLanguage] = useState<SupportedLanguage>(
    (document
      .querySelector("html")
      ?.getAttribute("lang") as SupportedLanguage) ?? "fr",
  );
  const { t } = useTranslation();

  const values = useMemo(
    () => ({
      appCode: params.app,
      appLabel: t(params.app),
      alternativeApp: params.alternativeApp,
      currentLanguage,
      cdnDomain: params.cdnDomain,
      version: params.version,
      changeLanguage,
    }),
    [params, t, currentLanguage, changeLanguage],
  );

  useEffect(() => {
    document.querySelector("html")?.setAttribute("lang", currentLanguage);
    document.title = `${values.appLabel}`;
  }, [currentLanguage, values.appLabel]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`Cannot be used outside of AppProvider`);
  }
  return context;
}
