import {
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useRef,
} from "react";

import clsx from "clsx";

import { mergeRefs } from "../../utils";
import { Button, ButtonProps, IconButton, IconButtonProps } from "../Button";
import { Dropdown, DropdownProps } from "../Dropdown";

interface Item {
  /** Object type */
  type: string;
  /** Items should be named, except for dividers */
  name?: string;
  /** Set to "hide" to hide this item. Defaults to "show" when undefined. */
  visibility?: "show" | "hide";
}
interface ButtonItem extends Item {
  type: "button";
  name: string;
  props: ButtonProps;
}
interface IconButtonItem extends Item {
  type: "icon";
  name: string;
  props: IconButtonProps;
}
interface DropdownItem extends Item {
  type: "dropdown";
  props: DropdownProps;
}
interface PrimaryItem extends Item {
  type: "primary";
  props: ButtonProps;
}
interface DividerItem extends Item {
  type: "divider";
}

export type ToolbarRef = HTMLDivElement;
export type ToolbarVariant = "default" | "no-shadow";
export type ToolbarAlign = "left" | "center" | "space" | "right";
export type ToolbarItem =
  | ButtonItem
  | IconButtonItem
  | DropdownItem
  | PrimaryItem
  | DividerItem;

export interface ToolbarProps extends React.ComponentPropsWithRef<"div"> {
  /**
   * Toolbar data items
   */
  items: ToolbarItem[];
  /**
   * Toolbar variant
   */
  variant?: ToolbarVariant;
  /**
   * Buttons alignement when isBlock is true
   */
  align?: ToolbarAlign;
  /**
   * Toolbar has width 100%
   */
  isBlock?: boolean;
  /**
   * Editor container ID for a11y purpose
   */
  ariaControls?: string;
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Accept optional children
   */
  children?: ReactNode;
}

const Toolbar = forwardRef(
  (
    {
      items,
      variant = "default",
      align = "space",
      isBlock = false,
      ariaControls,
      className,
    }: ToolbarProps,
    ref: Ref<ToolbarRef>,
  ) => {
    const divToolbarRef = useRef<HTMLDivElement>();

    const classes = clsx("toolbar z-2000 bg-white", className, {
      default: variant === "default",
      "no-shadow": variant === "no-shadow",
      "d-flex": isBlock,
      "d-inline-flex": !isBlock,
      "overflow-x-auto": isBlock,
      "justify-content-start": align === "left",
      "justify-content-between": align === "space",
      "justify-content-center": align === "center",
      "justify-content-end": align === "right",
    });

    const toolbarItems: Array<HTMLElement> = [];
    let lastItem: HTMLElement;
    let firstItem: HTMLElement;

    useEffect(() => {
      const buttons: NodeListOf<HTMLButtonElement> | undefined =
        divToolbarRef.current?.querySelectorAll("button");
      buttons?.forEach((item, index) => {
        if (index === 0) {
          firstItem = item;
        }
        lastItem = item;
        toolbarItems.push(item);
      });
    }, [items]);

    const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
      // div toolbar
      event.currentTarget.classList.add("focus");
      // focused button
      event.target.classList.add("focus");
    };

    const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
      // div toolbar
      event.currentTarget.classList.remove("focus");
      // focused button
      event.target.classList.remove("focus");
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      const index = toolbarItems.indexOf(event.currentTarget);
      switch (event.code) {
        case "ArrowLeft":
          // switch to previous item
          if (event.currentTarget === firstItem) {
            lastItem.focus();
          } else {
            toolbarItems[index - 1].focus();
          }
          break;
        case "ArrowRight":
          // switch to next item
          if (event.currentTarget === lastItem) {
            firstItem.focus();
          } else {
            toolbarItems[index + 1].focus();
          }
          break;
        default:
          break;
      }
    };

    return (
      <div
        ref={mergeRefs(ref, divToolbarRef)}
        className={classes}
        role="toolbar"
        aria-label="Text Formatting"
        aria-controls={ariaControls}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {items.map((item, index) => {
          if (item.visibility === "hide") return null;

          switch (item.type) {
            case "divider":
              return (
                <div key={item.name ?? index} className="toolbar-divider"></div>
              );

            case "button":
              return (
                <Button
                  {...item.props}
                  key={item.name ?? index}
                  color="tertiary"
                  variant="ghost"
                  tabIndex={index === 0 ? 0 : -1}
                  onKeyDown={handleKeyDown}
                />
              );

            case "icon":
              return (
                <IconButton
                  {...item.props}
                  key={item.name ?? index}
                  color="tertiary"
                  variant="ghost"
                  tabIndex={index === 0 ? 0 : -1}
                  onKeyDown={handleKeyDown}
                />
              );

            case "dropdown":
              return (
                <Dropdown {...item.props} key={item.name ?? index}>
                  {/* Set the children through props */}
                </Dropdown>
              );

            case "primary":
              return (
                <Button
                  {...item.props}
                  key={item.name ?? index}
                  variant="filled"
                  color="primary"
                  tabIndex={index === 0 ? 0 : -1}
                  onKeyDown={handleKeyDown}
                />
              );

            default:
              break;
          }
          return null;
        })}
      </div>
    );
  },
);

Toolbar.displayName = "Toolbar";

export default Toolbar;
