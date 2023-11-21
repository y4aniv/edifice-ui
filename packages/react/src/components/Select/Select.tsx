import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import SelectTrigger from "./SelectTrigger";
import Dropdown, { DropdownProps } from "../Dropdown/Dropdown";
import { DropdownTriggerProps } from "../Dropdown/DropdownTrigger";

export interface OptionsType {
  /**
   * Value
   */
  value: string;
  /**
   * Label
   */
  label: string;
}

export interface SelectProps
  extends Omit<DropdownProps, "children">,
    Omit<DropdownTriggerProps, "badgeContent"> {
  options: OptionsType[];
  onValueChange: (option: OptionsType) => void;
}

/**
 *
 * Select component is based on Dropdown Component. It extends `Dropdown` and `Dropdown.Trigger` props `block`, `overflow`, `icon`, `variant`, `size`, `disabled`
 */

const Select = ({
  icon,
  options,
  overflow,
  block,
  variant,
  size,
  disabled,
  onValueChange,
}: SelectProps) => {
  const [value, setValue] = useState(options[0]);

  const { t } = useTranslation();

  useEffect(() => {
    if (value) onValueChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Dropdown overflow={overflow} block={block}>
      <SelectTrigger
        icon={icon}
        label={t(value.label)}
        variant={variant}
        size={size}
        disabled={disabled}
      />
      <Dropdown.Menu role="listbox">
        {options?.map((option) => (
          <Dropdown.Item key={option.value} onClick={() => setValue(option)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

Select.displayName = "Select";

export default Select;
