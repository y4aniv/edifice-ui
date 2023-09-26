//---------------------  TS-CLIENT
//application = "media-library"

import { useCallback, useEffect, useState } from "react";

import { Filter, Search } from "@edifice-ui/icons";
import { WorkspaceElement, WorkspaceSearchFilter } from "edifice-ts-client";
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
import { Role, useWorkspaceSearch } from "../../core";
import { FolderNode } from "../../core/useWorkspaceSearch/useWorkspaceSearch";

// type Visibility = "public" | "protected" | "owner" | "external";

//droits workspace.create requis pour Public et App, workspace.list requis pour Shared
// type LIST_TYPE =
//   | "myDocuments"
//   | "appDocuments"
//   | "publicDocuments"
//   | "sharedDocuments"
//   | "trashDocuments"
//   | "externalDocuments";

// //---------------------
// type MediaLibraryView = "icons" | "list";

/**
 * Type of result the media library will send on success.
 *
 * FIXME: signature de fonction à faire évoluer au besoin.
 */
export type WorkspaceResult = WorkspaceElement[];

/**
 * MediaLibrary component properties
 */
export interface WorkspaceProps {
  /**
   * Only display media elements having this role[s] (=generic file format).
   * Set to null to display all medias.
   */
  roles: Role | Role[] | null;
  /** Notify parent when media elements are successfully activated. */
  onSuccess: (result: WorkspaceResult) => void;
  /** Notify parent to cancel media browsing. */
  onCancel: () => void;
}

export const Workspace = (props: WorkspaceProps) => {
  const { t } = useTranslation();

  const { root: owner, loadContent: loadOwnerDocs } = useWorkspaceSearch(
    "owner",
    t("Mes documents"),
    props.roles,
  );
  const { root: shared, loadContent: loadSharedDocs } = useWorkspaceSearch(
    "shared",
    t("Partagé avec moi"),
    props.roles,
  );
  const { root: protectd, loadContent: loadProtectedDocs } = useWorkspaceSearch(
    "protected",
    t("Ajouté dans les applications"),
    props.roles,
  );

  /**
   * Retrieve the stateful TreeNode matching a WorkspaceSearchFilter value
   */
  const rootNodeFor: (filter: WorkspaceSearchFilter) => FolderNode =
    useCallback(
      (filter: WorkspaceSearchFilter) => {
        switch (filter) {
          case "owner":
            return owner;
          case "shared":
            return shared;
          case "protected":
            return protectd;
          default:
            throw "no.root.node";
        }
      },
      [owner, protectd, shared],
    );

  const [currentFilter, setCurrentFilter] =
    useState<WorkspaceSearchFilter>("owner");

  const [currentNode, setCurrentNode] = useState<FolderNode>(owner);

  const [documents, setDocuments] = useState<WorkspaceElement[]>([]);

  /**
   * Load current node children (folders and files)
   */
  const loadContent = useCallback(() => {
    // Try to avoid loading twice
    if (
      typeof currentNode.children === "undefined" ||
      !currentNode.children.length
    ) {
      switch (currentFilter) {
        case "owner":
          loadOwnerDocs(currentNode.id);
          break;
        case "shared":
          loadSharedDocs(currentNode.id);
          break;
        case "protected":
          loadProtectedDocs(currentNode.id);
          break;
        default:
          throw "no.way";
      }
    }
  }, [
    currentFilter,
    currentNode,
    loadOwnerDocs,
    loadProtectedDocs,
    loadSharedDocs,
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
    const root = rootNodeFor(filter);
    const targetNode =
      nodeId === "" ? root : find(root, (node) => node.id === nodeId);
    if (targetNode) {
      setCurrentNode(targetNode);
    }
  }

  /** Load content when the callback is updated */
  useEffect(() => loadContent(), [loadContent]);

  /** Display documents when currentNode changes */
  useEffect(() => {
    setDocuments(currentNode.files || []);
  }, [currentNode, owner, protectd, shared]);

  /** Load initial content, once */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => selectAndLoadContent("owner", ""), []);

  return (
    <Grid className="workspace flex-grow-1 gap-0">
      <Grid.Col sm="1" md="2" xl="3" className="folders border-end p-12 gap-12">
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
            className="search border-bottom px-16 py-8 gap-16 d-flex "
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
          <Grid.Col sm="4" md="8" xl="12" className="list p-12 gap-8">
            <p>My list here, documents = {JSON.stringify(documents)}</p>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default Workspace;
