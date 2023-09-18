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
import useWorkspaceSearch from "../../core/useWorkspaceSearch/useWorkspaceSearch";

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

  const [mine, setNodeMine] = useState<TreeNode>({
    id: "mine",
    name: t("Mes documents"),
    section: true,
  });
  /*
  const [shared, setNodeShared] = useState<TreeNode>({
    id: "shared",
    name: t("Partagé avec moi"),
    section: true,
  });
  const [fromApps, setNodeFromApps] = useState<TreeNode>({
    id: "from-apps",
    name: t("Ajouté dans les applications"),
    section: true,
  });
*/

  const [currentNode, setCurrentNode] = useState<TreeNode>(mine);

  const { setParentId: searchForOwnerDocs } = useWorkspaceSearch(
    "owner",
    (content) => {
      currentNode.children = content;
      setNodeMine(mine);
    },
  );

  function handleUnfold(root: TreeNode, nodeId: string) {
    searchForOwnerDocs(nodeId);
  }

  function handleItemSelect(nodeId: string) {
    const node = currentNode.children?.find((node) => node.id === nodeId);
    node && setCurrentNode(node);
  }

  return (
    <Grid className="flex-grow-1 gap-0">
      <Grid.Col sm="1" md="2" xl="3" className="border-end p-12 gap-12">
        <TreeView
          data={mine}
          selectedNodesIds={[]}
          onTreeItemSelect={handleItemSelect}
          onTreeItemFold={() => {}}
          onTreeItemUnfold={(nodeId) => handleUnfold(mine, nodeId)}
        />
      </Grid.Col>
      <Grid.Col sm="3" md="6" xl="9">
        <Grid className="flex-grow-1 gap-0">
          <Grid.Col
            sm="4"
            md="8"
            xl="12"
            className="border-bottom px-16 py-8 gap-16 d-flex"
          >
            <FormControl className="input-group" id="search">
              <Input
                noValidationIcon
                placeholder={t("Placeholder text")}
                size="md"
                type="search"
              />
              <SearchButton
                aria-label={t("Rechercher")}
                icon={<Search />}
                type="submit"
                onClick={() => {
                  /*TODO filtrer les résultats à l'écran*/
                }}
              />
            </FormControl>

            <Dropdown
              trigger={
                <DropdownTrigger icon={<Filter />} title={t("Filtrer")} />
              }
              content={<p>TODO</p>}
            />
          </Grid.Col>
          <Grid.Col sm="4" md="8" xl="12" className="p-12 gap-8">
            <p>My list here, selected = {props.selected}</p>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default Workspace;
