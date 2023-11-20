import { forwardRef, ReactNode, Ref } from "react";

import clsx from "clsx";

export type BadgeRef = HTMLSpanElement;

/** Badge variant : notification */
export type NotificationBadgeVariant = {
  type: "notification";
  level: "warning" | "danger";
};
/** Badge variant : profile = teacher, student, relative or personnel */
export type ProfileBadgeVariant = {
  type: "profile";
  profile: "teacher" | "student" | "relative" | "personnel";
};
export type BadgeVariants = NotificationBadgeVariant | ProfileBadgeVariant;

export interface BadgeProps extends React.ComponentPropsWithRef<"span"> {
  /**
   * Badge variant : notification or profile (Teacher|Student|Relative|Personnel)
   * Defaults to notification.
   */
  variant?: BadgeVariants;
  /**
   * Is badge always visible ?
   */
  visibility?: "always";
  /**
   * If set, forces the radius of the rounded border.
   */
  rounded?: "pill" | "circle";
  /**
   * Text or icon (or whatever) to render as children elements.
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
      className,
      variant = { type: "notification", level: "danger" },
      visibility,
      rounded,
      ...restProps
    }: BadgeProps,
    ref: Ref<BadgeRef>,
  ) => {
    if (!rounded) {
      if ("always" === visibility) {
        rounded = "circle";
      } else if ("notification" === variant.type) {
        rounded = "pill";
      }
    }
    const radius = rounded ? `rounded-${rounded}` : undefined;

    const classes = clsx(
      "badge",

      "always" === visibility &&
        `position-absolute translate-middle p-8 ${radius} d-block`,

      "notification" === variant.type && `bg-${variant.level} ${radius}`,

      "profile" === variant.type &&
        `badge-profile-${variant.profile} ${radius}`,

      className,
    );

    return <span ref={ref} className={classes} {...restProps} />;
  },
);

Badge.displayName = "Badge";

export default Badge;
