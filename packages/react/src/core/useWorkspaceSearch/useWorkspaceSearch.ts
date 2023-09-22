import { useCallback } from "react";

import { odeServices } from "edifice-ts-client";
import { ID, WorkspaceElement, WorkspaceSearchFilter } from "edifice-ts-client";

import { DocumentHelper, Role } from "./DocumentHelper";
import { useMockedData } from "../OdeClientProvider";
import { useHasWorkflow } from "../useHasWorkflow";

// Request depuis Workspace
// /workspace/documents?filter=owner&hierarchical=false&includeall=true&_=1695024305775
/* renvoie
[
    {
        "_id": "668173c1-9206-4955-b894-aceda5494ed9",
        "externalId": "edumedia",
        "owner": "7086a6f9-bf0a-44f3-8743-e0c77bf9c007",
        "application": "media-library",
        "created": "2023-06-21 11:15.27.094",
        "eType": "folder",
        "modified": "2023-06-21 11:15.27.094",
        "name": "Edumedia",
        "ownerName": "ADMC Jean-Christophe"
    }
]
*/
// /workspace/documents?filter=shared&hierarchical=false&directShared=true&includeall=true&_=1695024135443
// /workspace/documents?filter=protected&hierarchical=false&includeall=true&_=1695024135444
// /workspace/documents?filter=trash&hierarchical=false&includeall=true&_=1695025473778

// Request depuis MediaLib
// Prefs : /userbook/preference/workspace?_=1695024601185 => {"preference":"{\"view\":\"icons\",\"quickstart\":\"notviewed\"}"}
// /workspace/documents?filter=protected&parentId=&_=1695024601187
// /workspace/documents?filter=owner&parentId=&hierarchical=false&includeall=true&_=1695024601189
// /workspace/documents?filter=shared&parentId=&directShared=true&hierarchical=false&includeall=true&_=1695024601190

export default function useWorkspaceSearch(
  filter: WorkspaceSearchFilter,
  format: Role | Role[] | null,
  onResult: (
    filter: WorkspaceSearchFilter,
    content: WorkspaceElement[],
  ) => void,
) {
  const mock = useMockedData();
  const canListDocs = useHasWorkflow(
    "org.entcore.workspace.controllers.WorkspaceController|listDocuments",
  );
  const canListFolders = useHasWorkflow(
    "org.entcore.workspace.controllers.WorkspaceController|listFolders",
  );

  const loadContent = useCallback(
    (folderId?: ID) => {
      if (canListDocs && canListFolders) {
        // If mocked data is available, use it. Otherwise load from server.
        const asyncLoad =
          mock?.listWorkspaceDocuments?.().then((results) =>
            results
              .filter((f) => {
                if (!format) return true;
                const role = DocumentHelper.getRole(f);
                if (typeof format === "string") return format === role;
                if (Array.isArray(format))
                  return format.findIndex((r) => r === role) >= 0;
                return false; // should not happen
              })
              .map((r) => {
                // Generate random IDs to prevent infinite recursion
                const ret = {
                  ...r,
                  _id: "" + Math.round(Math.random() * 9999),
                };
                ret.name =
                  r.eType == "folder"
                    ? "folder id=" + ret._id
                    : "file id=" + ret._id;
                return ret;
              }),
          ) || odeServices.workspace().listDocuments(filter, folderId);
        asyncLoad.then((results) => onResult(filter, results));
      }
    },
    [canListDocs, canListFolders, mock, filter, format, onResult],
  );

  return { loadContent };
}
