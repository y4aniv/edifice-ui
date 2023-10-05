import {
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  Ref,
  RefAttributes,
  forwardRef,
  useEffect,
  useRef,
} from "react";

import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { mergeRefs } from "../../utils";
import { IconButton, IconButtonProps } from "../Button";
import { Dropdown } from "../Dropdown";

export type ToolbarOptionsType = "divider" | "primary" | undefined;
export type ToolbarDividerType = Extract<ToolbarOptionsType, "divider">;
export type ToolbarRef = HTMLDivElement;
export type ToolbarVariant = "default" | "no-shadow";
export type ToolbarAlign = "left" | "center" | "space" | "right";

export type ToolbarOptions =
  | {
      /**
       * Object type
       */
      type?: ToolbarOptionsType;
      /**
       * Icon component
       */
      icon: JSX.Element;
      /**
       * Label for a11y
       */
      label: string;
      /**
       * Button or Extension name
       */
      name: string;
      /**
       * Has a Dropdown ?
       */
      hasDropdown?: boolean;
      /**
       * Dropdown Content
       */
      content?: () => ReactNode;
      /**
       * Action OnClick
       */
      action: (elem: any) => any;
      /**
       * Show item if is enabled
       */
      isEnable: boolean;
      /**
       * Optional class for styling purpose
       */
      className?: string;
      /**
       * Add "is-selected" class
       */
      isActive?: boolean;
    }
  | {
      /**
       * Object type
       */
      type: ToolbarDividerType;
    };

export interface ToolbarProps extends React.ComponentPropsWithRef<"div"> {
  /**
   * Toolbar data items
   */
  data: ToolbarOptions[];
  /**
   * Toolbar Action Menu
   */
  options?: any;
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
   * Accept optional children
   */
  children?: ReactNode;
}

const Toolbar = forwardRef(
  (
    {
      data,
      options,
      variant = "default",
      align = "space",
      isBlock = false,
      ariaControls,
    }: ToolbarProps,
    ref: Ref<ToolbarRef>,
  ) => {
    const { t } = useTranslation();
    const divToolbarRef = useRef<HTMLDivElement>();

    const classes = clsx("toolbar z-2000", {
      default: variant === "default",
      "no-shadow": variant === "no-shadow",
      "d-flex": isBlock,
      "d-inline-flex": !isBlock,
      "overflow-x-scroll": isBlock,
      "justify-content-start": align === "left",
      "justify-content-between": align === "space",
      "justify-content-center": align === "center",
      "justify-content-end": align === "right",
    });

    const toolbarItems: Array<HTMLButtonElement> = [];
    let lastItem: HTMLButtonElement;
    let firstItem: HTMLButtonElement;

    useEffect(() => {
      const items: NodeListOf<HTMLButtonElement> | undefined =
        divToolbarRef.current?.querySelectorAll("button");
      items?.forEach((item, index) => {
        if (index === 0) {
          firstItem = item;
        }
        lastItem = item;
        toolbarItems.push(item);
      });
    }, [data]);

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

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
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
        style={{ zIndex: "999999" }}
        role="toolbar"
        aria-label="Text Formatting"
        aria-controls={ariaControls}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {data.map((item, index) => {
          const isDisabled = !item.type && !item.isEnable;
          const isDivider = "type" in item && item.type === "divider";
          const isPrimaryAction = "type" in item && item.type === "primary";
          const showDropdownElement = !item.type && item.hasDropdown;

          if (isDisabled) return null;

          if (isDivider) {
            return <div key={index} className="toolbar-divider"></div>;
          }

          if (isPrimaryAction) {
            return (
              <IconButton
                key={item.name}
                icon={item.icon}
                onClick={item.action}
                aria-label={t(item.label)}
                variant="filled"
                color="primary"
                tabIndex={index === 0 ? 0 : -1}
                onKeyDown={handleKeyDown}
              />
            );
          }

          if (showDropdownElement) {
            return (
              <Dropdown>
                {(
                  customTriggerProps: JSX.IntrinsicAttributes &
                    Omit<IconButtonProps, "ref"> &
                    RefAttributes<HTMLButtonElement>,
                ) => (
                  <>
                    <IconButton
                      {...customTriggerProps}
                      type="button"
                      aria-label={item.label}
                      color="tertiary"
                      variant="ghost"
                      icon={item.icon}
                      tabIndex={index === 0 ? 0 : -1}
                      onKeyDown={handleKeyDown}
                    />

                    {item.content?.()}
                  </>
                )}
              </Dropdown>
            );
          }

          return (
            <IconButton
              key={item.name}
              icon={item.icon}
              onClick={item.action}
              aria-label={t(item.label)}
              variant="ghost"
              color="tertiary"
              className={clsx(
                item.className,
                item.isActive ? "is-selected" : "",
              )}
              tabIndex={index === 0 ? 0 : -1}
              onKeyDown={handleKeyDown}
            />
          );
        })}
        {options ? (
          <Dropdown>
            <Dropdown.Trigger
              label={t("Plus")}
              variant="ghost"
              size="md"
              tabIndex={-1}
            />
            <Dropdown.Menu>
              {options.map((option) => {
                if (option.type === "divider") {
                  return <Dropdown.Separator />;
                }

                return (
                  <>
                    <Dropdown.Item icon={option.icon} onClick={option.action}>
                      {option.label}
                    </Dropdown.Item>
                  </>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        ) : null}
      </div>
    );
  },
);

Toolbar.displayName = "Toolbar";

export default Toolbar;
