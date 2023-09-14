import { useMemo } from "react";

import {
  ExternalLink,
  Folder,
  Mic,
  RecordVideo,
  Smartphone,
} from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import { InnerTabs } from "./innertabs";
import Modal from "../components/Modal/Modal";
import { Tabs } from "../components/Tabs";
import { TabsItemProps } from "../components/Tabs/TabsItem";
import { useHasWorkflow } from "../core/useHasWorkflow";

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
  availableFor: Array<MediaLibraryType | "*">;

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
const mediaLibraryTypes: {
  [key in MediaLibraryType]: MediaLibraryTypeOptions;
} = {
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
 * Type of response the media library will send on success.
 *
 * FIXME: signature de fonction à faire évoluer au besoin.
 */
export type MediaLibraryResponse = () => void;

/**
 * MediaLibrary component properties
 */
export interface MediaLibraryProps {
  type: MediaLibraryType;
  onSuccess: MediaLibraryResponse;
  onClose: () => void;
}

//---------------------------------------------------
// Media Library implementation
//---------------------------------------------------
export const MediaLibrary = ({
  type,
  onSuccess,
  onClose,
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
      content: <InnerTabs.Workspace onSuccess={onSuccess} />,
      availableFor: ["audio", "video", "image", "attachment"],
      isEnable: null,
    },
    upload: {
      id: "upload",
      icon: <Smartphone />,
      label: t("Mon appareil"),
      content: <InnerTabs.Upload onSuccess={onSuccess} />,
      availableFor: ["audio", "video", "image", "attachment"],
      isEnable: () => (workspaceCreateWorkflow ? true : false),
    },
    "video-capture": {
      id: "video",
      icon: <RecordVideo />,
      label: t("Captation vidéo"),
      content: <InnerTabs.Video onSuccess={onSuccess} />,
      availableFor: ["video"],
      isEnable: () => false, // TODO workflow ?
    },
    "audio-capture": {
      id: "audio",
      icon: <Mic />,
      label: t("Captation audio"),
      content: <InnerTabs.Audio onSuccess={onSuccess} />,
      availableFor: ["audio"],
      isEnable: () => (workspaceCreateWorkflow ? true : false),
    },
    linker: {
      id: "external",
      icon: <ExternalLink />,
      label: t("Lien externe"),
      content: <InnerTabs.Linker onSuccess={onSuccess} />,
      availableFor: ["hyperlink"],
      isEnable: null,
    },
    resource: {
      id: "resource",
      icon: <Folder />,
      label: t("Lien interne"),
      content: <InnerTabs.Resource onSuccess={onSuccess} />,
      availableFor: ["hyperlink"],
      isEnable: null,
    },
    iframe: {
      id: "iframe",
      icon: <ExternalLink />,
      label: t("</> Balise embed ou iframe"),
      content: <InnerTabs.Iframe onSuccess={onSuccess} />,
      availableFor: ["embedder"],
      isEnable: null,
    },
  };

  /* Filter out unwanted tabs. */
  const tabs = orderedTabs
    .map((key) => availableTabs[key])
    .filter(
      (tab) =>
        tab.isEnable?.() !== false &&
        (tab.availableFor.length === 0 || tab.availableFor.includes(type)),
    );

  const defaultTabIdx = useMemo<number>(() => {
    let idx = 0;
    if (typeof mediaLibraryTypes[type]?.defaultTab == "string") {
      const defaultTabId = mediaLibraryTypes[type].defaultTab;
      idx = tabs.findIndex((t) => t.id === defaultTabId);
    }
    // Check boundaries before returning the index
    return 0 > idx || idx >= tabs.length ? 0 : idx;
  }, [type, tabs]);

  const isOpen = !!type;
  const modalHeader = t(
    mediaLibraryTypes[type]?.title ?? "Bibliothèque multimédia", // FIXME i18n key
  );

  return (
    <Modal id="media-library" isOpen={isOpen} onModalClose={onClose}>
      <Modal.Header onModalClose={onClose}>{modalHeader}</Modal.Header>
      <Modal.Body>
        <Tabs items={tabs} defaultId={tabs[defaultTabIdx].id}></Tabs>
      </Modal.Body>
    </Modal>
  );
};

// Add inner tabs implementations to exported component.
Object.assign(MediaLibrary, InnerTabs);

export default MediaLibrary;
