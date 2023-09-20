import { createContext, type ReactNode, useMemo, useContext } from "react";

import { App, WorkspaceSearchResult } from "edifice-ts-client";

export interface MockedDataProps {
  children: ReactNode;
  mocks: {
    app?: App;
    workflows?: string[];
    workspaceDocuments?: WorkspaceSearchResult;
  };
}

export interface ContextProps {
  app?: App;
  hasWorkflow?: (workflow: string) => Promise<boolean>;
  listWorkspaceDocuments?: () => Promise<WorkspaceSearchResult>;
}

const MockedDataContext = createContext<ContextProps | null>(null!);

export function MockedDataProvider({ children, mocks }: MockedDataProps) {
  const values = useMemo<ContextProps>(() => {
    const value: ContextProps = {};

    if (typeof mocks.app !== "undefined") {
      value.app = mocks.app;
    }

    if (typeof mocks.workflows !== "undefined") {
      value.hasWorkflow = async (workflow) =>
        mocks.workflows?.findIndex((w) => w === workflow) !== -1;
    }
    if (typeof mocks.workspaceDocuments !== "undefined") {
      value.listWorkspaceDocuments = async () => mocks.workspaceDocuments;
    }

    return value;
  }, [mocks]);

  return (
    <MockedDataContext.Provider value={values}>
      {children}
    </MockedDataContext.Provider>
  );
}

export function useMockedData() {
  const context = useContext(MockedDataContext);
  // Do not raise an exception here if context is null :
  // - In production, hooks and services will be outside of a mocked data context.
  // - In documentation on StoryBook, a mocked data context may exist.
  return context;
}
