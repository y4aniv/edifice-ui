import React, { useEffect, useState } from "react";

import { Dropdown } from "../Dropdown";
import { useDropdownContext } from "../Dropdown/DropdownContext";
import { OptionListItemType } from "../SelectList";

interface ComboboxMenuProps {
  onChange?: (model: Array<string | number>) => void;
  options: OptionListItemType[];
  model?: Array<string | number>;
}

const ComboboxMenu: React.FC<ComboboxMenuProps> = ({
  onChange,
  options,
  model = [],
}) => {
  const { visible } = useDropdownContext();

  const [localModel, setLocalModel] = useState(model);

  useEffect(() => {
    onChange?.(localModel);
  }, [localModel]);

  if (!visible || options.length === 0) {
    return null;
  }

  const handleOptionClick = (value: string | number) => {
    setLocalModel([value]);
  };

  return (
    <div className="select-list position-absolute bg-white shadow rounded-4 py-12 px-8 w-75">
      {options.map((option, index) => (
        <div key={index}>
          <Dropdown.Item
            onClick={() => handleOptionClick(option.value)}
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
