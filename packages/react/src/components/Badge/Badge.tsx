import { forwardRef, ReactNode, Ref } from "react";

import clsx from "clsx";

export type BadgeRef = HTMLSpanElement;

export type BadgeColors =
  | "dark"
  | "light"
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "info"
  | "success"
  | "student"
  | "relative"
  | "teacher"
  | "personnel";
export type BadgeVariants = "fill" | "outline";

export interface BadgeProps extends React.ComponentPropsWithRef<"span"> {
  /**
   * `dark` (default), `light`, `primary`, `secondary`,
   * `danger`,  `warning`, `info`, `success`,
   * `student`, `relative`, `teacher`, `personnel`;
   */
  color?: BadgeColors;
  /**
   * `fill` or `outline` (default)
   */
  variant?: BadgeVariants;
  /**
   * Does it has a text ?
   */
  children: ReactNode;
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
      color = "dark",
      children,
      className,
      variant = "outline",
      ...restProps
    }: BadgeProps,
    ref: Ref<BadgeRef>,
  ) => {
    const classes = clsx(
      "badge",
      {
        [`text-${color}`]: color && variant === "outline",
        [`border`]: variant === "outline",
        [`border-${color}`]: color && variant === "outline",
        [`bg-${color} rounded-pill`]: color && variant === "fill",
      },
      className,
    );

    return (
      <span ref={ref} className={classes} {...restProps}>
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
