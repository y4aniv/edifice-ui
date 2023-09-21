import { createContext, useContext, useMemo, useState } from "react";

import {
  ExternalLink,
  Folder,
  Mic,
  RecordVideo,
  Smartphone,
} from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import { InnerTabs } from "./innertabs";
import { Button } from "../../components";
import Modal from "../../components/Modal/Modal";
import { Tabs } from "../../components/Tabs";
import { TabsItemProps } from "../../components/Tabs/TabsItem";
import { useHasWorkflow } from "../../core/useHasWorkflow";

//---------------------------------------------------
// Tabs parameters
//---------------------------------------------------
/** Ordered list of tabs. */
const orderedTabs = [
  "workspace", // Media browser
  "upload", // Filesystem browser + drag'n'drop of files
  "audio-capture",
  "video-capture",
  "resource", // Link to a shared resource (previously known as "internal linker")
  "linker", // Link to an external website (previously known as "external linker")
  "iframe", // Framed website
];

/**
 * Available features exposed by tabs :
 * "workspace" | "upload" | "audio-capture" | ...
 */
type AvailableTab = (typeof orderedTabs)[number];

/** Additional properties of tabs. */
type MediaLibraryTabProps = {
  /**
   * Media Library types where this tab should be displayed.
   * "*" for all types.
   */
  availableFor: Array<MediaLibraryType | "*" | null>;

  /** Required checks before using this feature. */
  isEnable: null | (() => boolean);
};

//---------------------------------------------------
// Media Library parameters
//---------------------------------------------------
/**
 * Pre-configured types of media libraries.
 * Choosing a type will filter out unwanted tabs.
 */
export type MediaLibraryType =
  /** Audio files */
  | "audio"
  /** Video files / streams / links */
  | "video"
  /** Image files */
  | "image"
  /** Attached files */
  | "attachment"
  /** Embedded websites */
  | "embedder"
  /** Hyperlinks */
  | "hyperlink";

type MediaLibraryTypeOptions = {
  /** I18n key describing this MediaLibrary type. */
  title: string;
  /** Default tab to display. */
  defaultTab: AvailableTab;
};

/** Map of MediaLibrary types and options. */
const mediaLibraryTypes: { none: null } & {
  [key in MediaLibraryType]: MediaLibraryTypeOptions;
} = {
  none: null,
  audio: {
    title: "Ajouter un audio depuis...",
    defaultTab: "audio-capture",
  },
  video: {
    title: "Ajouter une vidéo depuis...",
    defaultTab: "video-capture",
  },
  image: { title: "Ajouter une image depuis...", defaultTab: "workspace" },
  attachment: {
    title: "Ajouter une pièce jointe depuis...",
    defaultTab: "workspace",
  },
  hyperlink: { title: "Ajouter un lien", defaultTab: "linker" },
  embedder: { title: "Ajout embed / iframe", defaultTab: "iframe" },
};

/**
 * Type of result the media library will send on success.
 *
 * FIXME: signature de fonction à faire évoluer au besoin.
 */
export type MediaLibraryResult = string;

/**
 * MediaLibrary component properties
 */
export interface MediaLibraryProps {
  type: MediaLibraryType | null;
  onSuccess: (result: MediaLibraryResult) => void;
  onCancel: () => void;
}

const MediaLibraryContext = createContext<{
  // Set the counter in the success button label
  setResultCounter: (count?: number) => void;

  // Set a innertab-specific callback which gets the result when success button is clicked
  setResult: (result?: MediaLibraryResult) => void;

  /**
   * Allow an innertab to switch display to another innertab.
   * This function will throw an error if switching failed.
   */
  setVisibleTab: (tab: AvailableTab) => void;
}>(null!);

export function useMediaLibraryContext() {
  const context = useContext(MediaLibraryContext);
  if (!context) {
    throw new Error(
      `Innertabs compound components cannot be rendered outside the MediaLibrary component`,
    );
  }
  return context;
}

//---------------------------------------------------
// Media Library implementation
//---------------------------------------------------
export const MediaLibrary = ({
  type,
  onSuccess,
  onCancel,
}: MediaLibraryProps) => {
  const { t } = useTranslation();

  const workspaceCreateWorkflow = useHasWorkflow(
    "org.entcore.workspace.controllers.WorkspaceController|addDocument",
  );

  const availableTabs: {
    [tabname in AvailableTab]: TabsItemProps & MediaLibraryTabProps;
  } = {
    workspace: {
      id: "workspace",
      icon: <Folder />,
      label: t("Espace doc"),
      content: <InnerTabs.Workspace />,
      availableFor: ["audio", "video", "image", "attachment"],
      isEnable: null,
    },
    upload: {
      id: "upload",
      icon: <Smartphone />,
      label: t("Mon appareil"),
      content: <InnerTabs.Upload />,
      availableFor: ["audio", "video", "image", "attachment"],
      isEnable: () => (workspaceCreateWorkflow ? true : false),
    },
    "video-capture": {
      id: "video",
      icon: <RecordVideo />,
      label: t("Captation vidéo"),
      content: <InnerTabs.Video />,
      availableFor: ["video"],
      isEnable: () => false, // TODO workflow ?
    },
    "audio-capture": {
      id: "audio",
      icon: <Mic />,
      label: t("Captation audio"),
      content: <InnerTabs.Audio />,
      availableFor: ["audio"],
      isEnable: () => (workspaceCreateWorkflow ? true : false),
    },
    linker: {
      id: "external",
      icon: <ExternalLink />,
      label: t("Lien externe"),
      content: <InnerTabs.Linker />,
      availableFor: ["hyperlink"],
      isEnable: null,
    },
    resource: {
      id: "resource",
      icon: <Folder />,
      label: t("Lien interne"),
      content: <InnerTabs.Resource />,
      availableFor: ["hyperlink"],
      isEnable: null,
    },
    iframe: {
      id: "iframe",
      icon: <ExternalLink />,
      label: t("</> Balise embed ou iframe"),
      content: <InnerTabs.Iframe />,
      availableFor: ["embedder"],
      isEnable: null,
    },
  };

  // --------------- Hooks
  /* Filter out unwanted tabs. */
  const tabs = useMemo<(TabsItemProps & MediaLibraryTabProps)[]>(
    () =>
      orderedTabs
        .map((key) => availableTabs[key])
        .filter(
          (tab) =>
            tab.isEnable?.() !== false &&
            (tab.availableFor.length === 0 || tab.availableFor.includes(type)),
          // eslint-disable-next-line react-hooks/exhaustive-deps
        ),
    [type],
  );

  /* Compute the index of the displayed tab by default. */
  const defaultTabIdx = useMemo<number>(() => {
    const typeKey = type || "none";
    let idx = 0;
    if (typeof mediaLibraryTypes[typeKey]?.defaultTab == "string") {
      const defaultTabId = mediaLibraryTypes[typeKey]?.defaultTab;
      idx = tabs.findIndex((t) => t.id === defaultTabId);
    }
    // Check boundaries before returning an index.
    return 0 > idx || idx >= tabs.length ? 0 : idx;
  }, [type, tabs]);

  // Stateful contextual values
  const [resultCounter, setResultCounter] = useState<number | undefined>();
  const [result, setResult] = useState<MediaLibraryResult | undefined>();
  function setVisibleTab(tab: AvailableTab) {
    const idx = tabs.findIndex((t) => t.id === tab);
    if (idx < 0) throw "tab.not.visible";
    // TODO améliorer le composant Tabs pour pouvoir le piloter depuis le parent.
    throw "not.implemented.yet";
  }

  // --------------- Utility functions
  const modalHeader = t(
    mediaLibraryTypes[type || "none"]?.title ?? "Bibliothèque multimédia", // FIXME i18n key
  );
  function handleSuccess() {
    if (result) onSuccess(result);
  }

  return (
    type && (
      <MediaLibraryContext.Provider
        value={{
          setResultCounter,
          setResult,
          setVisibleTab,
        }}
      >
        <Modal
          id="media-library"
          isOpen={type !== null}
          onModalClose={onCancel}
          size="xl"
        >
          <Modal.Header onModalClose={onCancel}>{modalHeader}</Modal.Header>
          <Modal.Body>
            <Tabs items={tabs} defaultId={tabs[defaultTabIdx].id}></Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              color="tertiary"
              variant="ghost"
              onClick={onCancel}
            >
              {t("cancel")}
            </Button>
            <Button
              type="button"
              color="primary"
              variant="filled"
              disabled={typeof result !== "undefined"}
              onClick={handleSuccess}
            >
              {t("add")}
              {resultCounter && ` (${resultCounter})`}
            </Button>
          </Modal.Footer>
        </Modal>
      </MediaLibraryContext.Provider>
    )
  );
};

// Add inner tabs implementations to exported component.
Object.assign(MediaLibrary, InnerTabs);

export default MediaLibrary;
