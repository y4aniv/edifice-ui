import { ChangeEvent } from "react";

import { useTranslation } from "react-i18next";

import ComboboxMenu from "./ComboboxMenu";
import ComboboxTrigger from "./ComboboxTrigger";
import { Dropdown } from "../Dropdown";
import { Loading } from "../Loading";
import { OptionListItemType } from "../SelectList";
export interface ComboboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleSearchResultsChange: (model: (string | number)[]) => void;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: OptionListItemType[];
  value: string;
  isLoading: boolean;
  noResult: boolean;
  placeholder?: string;
}

const Combobox = ({
  handleSearchResultsChange,
  handleSearchInputChange,
  options,
  value,
  isLoading,
  noResult,
  placeholder,
}: ComboboxProps) => {
  const { t } = useTranslation();

  return (
    <Dropdown block>
      <Combobox.Trigger
        placeholder={placeholder}
        handleSearchInputChange={handleSearchInputChange}
        value={value}
      />
      {isLoading && (
        <div className="d-flex align-items-center p-4">
          <Loading isLoading={isLoading} />
          <span className="ps-4">{t("explorer.search.pending")}</span>
        </div>
      )}
      {noResult && <div className="p-4">{t("portal.no.result")}</div>}
      <Combobox.Menu options={options} onChange={handleSearchResultsChange} />
    </Dropdown>
  );
};

Combobox.Menu = ComboboxMenu;
Combobox.Trigger = ComboboxTrigger;

Combobox.displayName = "Combobox";

export default Combobox;
