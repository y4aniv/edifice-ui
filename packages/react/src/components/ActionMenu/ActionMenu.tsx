import { Ref, forwardRef } from "react";

export type ActionMenuOptions =
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

export interface ActionMenuProps extends React.ComponentPropsWithRef<"ul"> {
  /** a11y ID */
  id: string;
  /** data options */
  options: ActionMenuOptions[];
}

const ActionMenu = forwardRef(
  ({ id, options }: ActionMenuProps, ref: Ref<HTMLUListElement>) => {
    return (
      <ul
        /* should come from Dropdown Context */
        id={id}
        ref={ref}
        role="menu"
        className="action-menu list-unstyled mb-0" /* aria-labelledby="menubutton1" */
      >
        {options.map((option, index) => {
          if (option.type === "divider")
            return (
              <li key={index} className="px-12 my-4">
                <hr className="m-0" />
              </li>
            );
          return (
            <li
              key={index}
              role="menuitem"
              onClick={option.action}
              onKeyDown={(event) => event.code != "Tab" && option.action}
              className="action-menu-item rounded py-8 px-12"
              tabIndex={0}
            >
              <div className="d-flex gap-8">
                {option.icon}
                <p>{option.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  },
);

ActionMenu.displayName = "ActionMenu";

export default ActionMenu;
