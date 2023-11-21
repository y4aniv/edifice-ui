import React from "react";

import { Dropdown } from "../Dropdown";
import { useDropdownContext } from "../Dropdown/DropdownContext";
import { OptionListItemType } from "../SelectList";

interface ComboboxMenuProps {
  handleSearchResultsChange: (model: string | number) => void;
  options: OptionListItemType[];
}

const ComboboxMenu: React.FC<ComboboxMenuProps> = ({
  handleSearchResultsChange,
  options,
}) => {
  const { visible } = useDropdownContext();

  if (!visible || options.length === 0) {
    return null;
  }

  return (
    <div className="dropdown-menu bg-white shadow rounded-4 py-12 px-8">
      {options.map((option, index) => (
        <div key={index}>
          <Dropdown.Item
            onClick={() => handleSearchResultsChange(option.value)}
            isClose={false}
          >
            {option.label}
          </Dropdown.Item>

          {index < options.length - 1 && <Dropdown.Separator />}
        </div>
      ))}
    </div>
  );
};

ComboboxMenu.displayName = "Combobox.Menu";

export default ComboboxMenu;
