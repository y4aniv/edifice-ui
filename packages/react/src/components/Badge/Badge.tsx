import { forwardRef, ReactNode, Ref } from "react";

import clsx from "clsx";

export type BadgeRef = HTMLSpanElement;

export type BadgeColors =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "warning"
  | "info";
export type BadgeVariants = "fill" | "outline";
export type BadgeSizes = "sm" | "md" | "lg";

export interface BadgeProps extends React.ComponentPropsWithRef<"span"> {
  /**
   * `primary`, `secondary`, `tertiary` or `danger`.
   */
  color?: BadgeColors;
  /**
   * `fill` or `outline` (default)
   */
  variant?: BadgeVariants;
  /**
   * `sm`, `md` (default) or `lg`
   */
  size?: BadgeSizes;
  /**
   * Does it has a text ?
   */
  children: ReactNode;
  /**
   * Display Icon Component to the left
   */
  leftIcon?: ReactNode;
  /**
   * Display Icon Component to the right
   */
  rightIcon?: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */

const Badge = forwardRef(
  (
    {
      color,
      size = "md",
      children,
      leftIcon,
      rightIcon,
      className,
      variant = "outline",
      ...restProps
    }: BadgeProps,
    ref: Ref<BadgeRef>,
  ) => {
    const classes = clsx(
      "badge",
      {
        "text-dark": !color || color === "tertiary",
        [`text-${color}`]:
          color && color !== "tertiary" && variant === "outline",
        [`border`]: variant === "outline",
        [`border-${color}`]: color && variant === "outline",
        [`bg-${color} rounded-pill`]: color && variant === "fill",
        "fs-3": size === "lg",
        "fs-5": size === "sm",
      },
      className,
    );

    return (
      <span ref={ref} className={classes} {...restProps}>
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
