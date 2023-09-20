//---------------------  TS-CLIENT
//application = "media-library"

import { useCallback, useEffect, useState } from "react";

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
import { useWorkspaceSearch } from "../../core";

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

export const Workspace = () => {
  const { t } = useTranslation();

  const [owner, setNodeOwner] = useState<TreeNode>({
    id: "owner",
    name: t("Mes documents"),
    section: true,
  });
  const [shared, setNodeShared] = useState<TreeNode>({
    id: "shared",
    name: t("Partagé avec moi"),
    section: true,
  });
  const [protectd, setNodeProtectd] = useState<TreeNode>({
    id: "protected",
    name: t("Ajouté dans les applications"),
    section: true,
  });

  /**
   * Retrieve the stateful TreeNode matching a filter value
   */
  const rootAccessorsFor: (filter: WorkspaceSearchFilter) => {
    getter: TreeNode;
    setter: React.Dispatch<React.SetStateAction<TreeNode>>;
  } = useCallback(
    (filter: WorkspaceSearchFilter) => {
      switch (filter) {
        case "owner":
          return { getter: owner, setter: setNodeOwner };
        case "shared":
          return { getter: shared, setter: setNodeShared };
        case "protected":
          return { getter: protectd, setter: setNodeProtectd };
        default:
          throw "no.way";
      }
    },
    [owner, protectd, shared],
  );

  const [currentFilter, setCurrentFilter] =
    useState<WorkspaceSearchFilter>("owner");

  const [currentNode, setCurrentNode] = useState<TreeNode>(owner);

  const [documents, setDocuments] = useState<WorkspaceDocument[]>([]);

  /**
   * Update Treeviews and file list with loaded results.
   */
  const onSearchResults = useCallback(
    (filter: WorkspaceSearchFilter, content: WorkspaceSearchResult) => {
      // Do not update children of the current node if filter has changed or children are already defined
      if (
        currentFilter !== filter ||
        typeof currentNode.children === "undefined"
      ) {
        // Split results between folders and files :
        const folders: WorkspaceFolder[] = [];
        const files: WorkspaceDocument[] = [];
        content.forEach((node) =>
          (node.eType === "folder" ? folders : files).push(node as any),
        );

        // Only folders are displayed in the Treeview
        currentNode.children = folders;
        setCurrentNode(currentNode);

        // Update document list
        setDocuments(files);
      }
    },
    [currentFilter, currentNode],
  );

  const { loadContent: searchForOwnerDocs } = useWorkspaceSearch(
    "owner",
    onSearchResults,
  );
  const { loadContent: searchForSharedDocs } = useWorkspaceSearch(
    "shared",
    onSearchResults,
  );
  const { loadContent: searchForProtectedDocs } = useWorkspaceSearch(
    "protected",
    onSearchResults,
  );

  /**
   * Load current node children (folders and files)
   */
  const loadContent = useCallback(() => {
    if (typeof currentNode.children === "undefined") {
      switch (currentFilter) {
        case "owner":
          searchForOwnerDocs(currentNode.id);
          break;
        case "shared":
          searchForSharedDocs(currentNode.id);
          break;
        case "protected":
          searchForProtectedDocs(currentNode.id);
          break;
        default:
          throw "no.way";
      }
    }
  }, [
    currentFilter,
    currentNode,
    searchForOwnerDocs,
    searchForProtectedDocs,
    searchForSharedDocs,
  ]);

  /**
   * Utility function to find a node in a tree.
   */
  function find(
    root: TreeNode,
    predicate: (node: TreeNode) => boolean,
  ): TreeNode | undefined {
    if (predicate(root)) return root;
    return (
      Array.isArray(root.children) &&
      root.children.find((child) => find(child, predicate))
    );
  }

  function selectAndLoadContent(filter: WorkspaceSearchFilter, nodeId: string) {
    setCurrentFilter(filter);
    const root = rootAccessorsFor(filter).getter;
    const targetNode =
      nodeId === "" ? root : find(root, (node) => node.id === nodeId);
    console.log(
      `root=${JSON.stringify(root)}, targetNode=${JSON.stringify(targetNode)}`,
    );
    if (targetNode) {
      setCurrentNode(targetNode);
      loadContent();
    }
  }

  /** Load initial content, once */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => selectAndLoadContent("owner", ""), []);

  return (
    <Grid className="flex-grow-1 gap-0">
      <Grid.Col sm="1" md="2" xl="3" className="border-end p-12 gap-12">
        <TreeView
          data={owner}
          onTreeItemSelect={(nodeId) => selectAndLoadContent("owner", nodeId)}
          onTreeItemUnfold={(nodeId) => selectAndLoadContent("owner", nodeId)}
        />
        <TreeView
          data={shared}
          onTreeItemSelect={(nodeId) => selectAndLoadContent("shared", nodeId)}
          onTreeItemUnfold={(nodeId) => selectAndLoadContent("shared", nodeId)}
        />
        <TreeView
          data={protectd}
          onTreeItemSelect={(nodeId) =>
            selectAndLoadContent("protected", nodeId)
          }
          onTreeItemUnfold={(nodeId) =>
            selectAndLoadContent("protected", nodeId)
          }
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
            <p>My list here, selected = {JSON.stringify(documents)}</p>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default Workspace;
