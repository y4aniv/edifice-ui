import { createContext, useContext } from "react";

import { IWebApp } from "edifice-ts-client";

import { CardProps } from "./Card";

export interface ContextProps
  extends Omit<CardProps, "children" | "className"> {
  app?: IWebApp | undefined;
  appCode: string | undefined;
  isSelectable?: boolean;
  isClickable?: boolean;
  onClick?: () => void;
  onSelect?: () => void;
}

export const CardContext = createContext<ContextProps | null>(null!);

CardContext.displayName = "CardContext";

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error(`Cannot be rendered outside the Card component`);
  }
  return context;
};
