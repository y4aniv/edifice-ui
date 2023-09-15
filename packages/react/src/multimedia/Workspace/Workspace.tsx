//---------------------  TS-CLIENT
//application = "media-library"

import { useState } from "react";

import { Filter, Search } from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import {
  Dropdown,
  DropdownTrigger,
  FormControl,
  Grid,
  Input,
  SearchButton,
  TreeNode,
  TreeView,
} from "../../components";

// type FileFormat = "audio" | "img";

// type Visibility = "public" | "protected" | "owner" | "external";

// // workspace.create requis pour Public et App, workspace.list requis pour Shared
// type LIST_TYPE =
//   | "myDocuments"
//   | "appDocuments"
//   | "publicDocuments"
//   | "sharedDocuments"
//   | "trashDocuments"
//   | "externalDocuments";

// //---------------------
// type MediaLibraryView = "icons" | "list";

export interface WorkspaceProps {
  selected?: string;
}

export const Workspace = (props: WorkspaceProps) => {
  const { t } = useTranslation();
  const [data] = useState<TreeNode>(null!);

  return (
    <Grid className="flex-grow-1 border rounded gap-0">
      <Grid.Col sm="1" md="2" xl="3" className="border-end p-12 gap-12">
        <TreeView
          data={data}
          onTreeItemBlur={() => {}}
          onTreeItemFocus={() => {}}
          onTreeItemFold={() => {}}
          onTreeItemSelect={() => {}}
          onTreeItemUnfold={() => {}}
        />
      </Grid.Col>
      <Grid.Col sm="3" md="6" xl="9">
        <Grid className="flex-grow-1 gap-0">
          <Grid.Col
            sm="4"
            md="8"
            lg="12"
            className="border-bottom px-16 py-8 gap-16"
          >
            <FormControl className="input-group" id="search">
              <Input
                noValidationIcon
                placeholder="Placeholder text"
                size="md"
                type="search"
              />
              <SearchButton
                aria-label="search"
                icon={<Search />}
                type="submit"
              />
            </FormControl>

            <Dropdown
              trigger={
                <DropdownTrigger icon={<Filter />} title={t("Filtrer")} />
              }
              content={<p>TODO</p>}
            />
          </Grid.Col>
          <Grid.Col sm="4" md="8" lg="12" className="p-12 gap-8">
            <p>My list here, selected = {props.selected}</p>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default Workspace;
