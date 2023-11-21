import { ChangeEvent, useEffect } from "react";

import { useDropdownContext } from "../Dropdown/DropdownContext";
import { FormControl } from "../Form";
import Input from "../Input/Input";

export interface ComboboxTriggerProps
  extends React.ComponentPropsWithRef<"button"> {
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const ComboboxTrigger = ({
  placeholder,
  value = "",
  handleSearchInputChange,
}: ComboboxTriggerProps) => {
  const { triggerProps, itemProps, setVisible } = useDropdownContext();

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

export default ComboboxTrigger;
