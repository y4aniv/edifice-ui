import { forwardRef, ReactNode, Ref } from "react";

import clsx from "clsx";

export type BadgeRef = HTMLSpanElement;

/** Badge variant : notification */
export type NotificationBadgeVariant = { type: "notification" };
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
    { className, variant = { type: "notification" }, ...restProps }: BadgeProps,
    ref: Ref<BadgeRef>,
  ) => {
    const classes = clsx(
      "badge",
      {
        "bg-danger rounded-pill": variant.type === "notification",
      },
      variant.type === "profile" && `badge-profile-${variant.profile}`,
      className,
    );

    return <span ref={ref} className={classes} {...restProps} />;
  },
);

Badge.displayName = "Badge";

export default Badge;
