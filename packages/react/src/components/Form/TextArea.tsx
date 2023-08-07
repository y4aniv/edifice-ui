import { forwardRef, Ref } from "react";

import clsx from "clsx";

import { useFormControl } from "./FormContext";

export type OmitTextAreaProps =
  | "disabled"
  | "required"
  | "size"
  | "id"
  | "readOnly";

export interface TextAreaProps
  extends Omit<React.ComponentPropsWithRef<"textarea">, OmitTextAreaProps> {
  /**
   * Control size of TextArea
   */
  size: "sm" | "md" | "lg";
  /**
   * Control maxHeight of TextArea
   */
  maxHeight?: number;
  /**
   * Change text of placeholder
   */
  placeholder?: string;
  /**
   * Disabled status
   */
  disabled?: boolean;
  /**
   * Remove validation icon
   */
  noValidationIcon?: boolean;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

/**
 * TextArea Form Component
 */

const TextArea = forwardRef(
  (
    {
      noValidationIcon,
      placeholder,
      size = "md",
      maxHeight = 200,
      className,
      ...restProps
    }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    const { id, isRequired, isReadOnly, status } = useFormControl();

    const classes = clsx(
      {
        "form-control": !isReadOnly,
        "form-control-lg": size === "lg",
        "form-control-sm": size === "sm",
        "is-invalid": status === "invalid",
        "is-valid": status === "valid",
        "form-control-plaintext": isReadOnly,
        "no-validation-icon": noValidationIcon,
        "form-controle-maxHeight": maxHeight,
      },
      className,
    );

    return (
      <textarea
        ref={ref}
        id={id}
        className={classes}
        placeholder={placeholder}
        required={isRequired}
        readOnly={isReadOnly}
        {...restProps}
      />
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
