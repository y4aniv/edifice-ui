import { createContext, type ReactNode, useMemo, useContext } from "react";

import { App } from "edifice-ts-client";

export interface MockedDataProps {
  children: ReactNode;
  mocks: {
    app?: App;
    workflows: string[];
  };
}

export interface ContextProps {
  app?: App;
  hasWorkflow?: (workflow: string) => Promise<boolean>;
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
        mocks.workflows.findIndex((w) => w === workflow) !== -1;
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
  // In production, hooks and services are outside of a mocked data context.
  // But in documentation on StoryBook, they can use mocked data instead.
  return context;
}
