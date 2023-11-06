import { ReactNode, Ref, forwardRef } from "react";

import { useDropdownContext } from "./DropdownContext";

export type DropdownMenuOptions =
  | {
      /**
       * Object type
       */
      type?: undefined;
      /**
       * Icon component
       */
      icon: JSX.Element;
      /**
       * Label for a11y
       */
      label: string;
      /**
       * Action OnClick
       */
      action: (elem: any) => any;
    }
  | {
      /**
       * Object type
       */
      type: "divider";
    };

const DropdownMenu = forwardRef(
  ({ children }: { children: ReactNode }, forwardRef: Ref<HTMLDivElement>) => {
    const { menuProps, visible } = useDropdownContext();

    return visible ? (
      <div ref={forwardRef} {...menuProps}>
        {children}
      </div>
    ) : null;
  },
);

DropdownMenu.displayName = "Dropdown.Menu";

export default DropdownMenu;
