import { useState } from "react";
import { ChangeEvent } from "react";

import { useClickOutside } from "../../hooks";
import { Dropdown } from "../Dropdown";
import { FormControl } from "../Form";
import { Input } from "../Input";

export interface ComboboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleSearchInputChange: () => void;
}

const Combobox = () => {
  const [visible, setVisible] = useState(false);
  const test: any[] = [
    {
      value: "oui",
      label: "oui",
    },
    {
      value: "non",
      label: "non",
    },
    {
      value: "huit",
      label: "huit",
    },
    {
      value: "test",
      label: "test",
    },
  ];

  const ref = useClickOutside(() => setVisible(false));

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <FormControl className="d-flex align-items-center" id="search">
        <Input
          ref={ref}
          className="max-w-512"
          noValidationIcon
          placeholder="Placeholder"
          size="md"
          type="search"
          onChange={handleSearchInputChange}
          onFocus={() => setVisible(test?.length > 0)}
        />
      </FormControl>
      {visible && (
        <Dropdown block>
          <Dropdown.Menu>
            {test.map((testi) => (
              <>
                <Dropdown.Item onClick={handleSearchInputChange}>
                  {testi.label}
                </Dropdown.Item>
                <Dropdown.Separator />
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

Combobox.displayName = "Combobox";

export default Combobox;
