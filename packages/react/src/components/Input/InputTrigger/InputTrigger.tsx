import { ChangeEvent, useEffect } from "react";

import { useDropdownContext } from "../../Dropdown/DropdownContext";
import { FormControl } from "../../Form";
import Input from "../Input";

export interface InputTriggerProps
  extends React.ComponentPropsWithRef<"button"> {
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const InputTrigger = ({
  placeholder,
  value = "",
  handleSearchInputChange,
}: InputTriggerProps) => {
  const { triggerProps, setVisible, itemProps } = useDropdownContext();

  const inputProps: Record<string, any> = {
    ...triggerProps,
    onClick: () => {
      if (value.length > 2) {
        setVisible(true);
      }
    },
    onChange: handleSearchInputChange,
  };

  useEffect(() => {
    setVisible(value.length > 2);
  }, [setVisible, value]);

  return (
    <FormControl className="d-flex align-items-center" id="search">
      <Input
        {...inputProps}
        className="max-w-512"
        noValidationIcon
        placeholder={placeholder}
        size="md"
        type="search"
        onKeyDown={itemProps.onMenuItemKeyDown}
      />
    </FormControl>
  );
};

export default InputTrigger;
