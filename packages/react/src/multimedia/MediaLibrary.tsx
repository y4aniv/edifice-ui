import { useCallback, useEffect, useState } from "react";

import {
  Camera,
  ExternalLink,
  Folder,
  Mic,
  RecordVideo,
} from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import { InnerTabs } from "./innertabs";
import Modal from "../components/Modal/Modal";
import { Tabs } from "../components/Tabs";
import { TabsItemProps } from "../components/Tabs/TabsItem";

/**
 * Pre-configured types of media libraries.
 * Choosing a type will filter the visible tabs.
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

const tabsAndOrder = [
  "workspace", // Media browser
  "filesystem", // File explorer
  "audio-capture",
  "video-capture",
  "resource", // Link to a shared resource (previously known as "internal linker")
  "linker", // Link to an external website (previously known as "external linker")
  "iframe", // Framed website
] as const;

/** Available features exposed by tabs. */
type AvailableTab = (typeof tabsAndOrder)[number];

type MediaLibraryTypeOptions = {
  title: string;
  defaultTab: AvailableTab;
};

/** Type of response the media library will send on success. */
export type MediaLibraryResponse = () => void;

/**
 * MediaLibrary component properties
 */
export interface MediaLibraryProps {
  type: MediaLibraryType;
  onSuccess: MediaLibraryResponse;
  onClose: () => void;
}

export const useMediaLibrary = (): [MediaLibraryType, (type: any) => void] => {
  const [type, setType] = useState<MediaLibraryType>(null!);

  useEffect(() => {
    if (type) console.log(type);
  }, [type]);

  const handleSetType = useCallback((type: MediaLibraryType) => {
    setType(type);
  }, []);

  return [type, handleSetType];
};

/*
 * Core MediaLibrary implementation
 */
export const MediaLibrary = ({
  type,
  onSuccess,
  onClose,
}: MediaLibraryProps) => {
  const { t } = useTranslation();

  const availableTabs: {
    [tabname in AvailableTab]: TabsItemProps & {
      /** Media Library types where this tab should be displayed. */
      availableFor: Array<MediaLibraryType | "*">;
    };
  } = {
    workspace: {
      id: "workspace",
      icon: <Folder />,
      label: "Espace doc",
      content: <InnerTabs.Workspace onSuccess={onSuccess} />,
      availableFor: ["audio", "video", "image", "attachment"],
    },
    filesystem: {
      id: "filesystem",
      icon: <Camera />,
      label: "Mon appareil",
      content: <InnerTabs.Filesystem onSuccess={onSuccess} />,
      availableFor: ["audio", "video", "image", "attachment"],
    },
    "video-capture": {
      id: "video",
      icon: <RecordVideo />,
      label: "Captation vidéo",
      content: <InnerTabs.Video onSuccess={onSuccess} />,
      availableFor: ["video"],
    },
    "audio-capture": {
      id: "audio",
      icon: <Mic />,
      label: "Captation audio",
      content: <InnerTabs.Audio onSuccess={onSuccess} />,
      availableFor: ["audio"],
    },
    linker: {
      id: "external",
      icon: <ExternalLink />,
      label: "Lien externe",
      content: <InnerTabs.Linker onSuccess={onSuccess} />,
      availableFor: ["hyperlink"],
    },
    resource: {
      id: "resource",
      icon: <Folder />,
      label: "Lien interne",
      content: <InnerTabs.Resource onSuccess={onSuccess} />,
      availableFor: ["hyperlink"],
    },
    iframe: {
      id: "iframe",
      icon: <Folder />,
      label: "</> Balise embed ou iframe",
      content: <InnerTabs.Iframe onSuccess={onSuccess} />,
      availableFor: ["embedder"],
    },
  };

  /* Filter out unwanted tabs. */
  const tabs = tabsAndOrder
    .map((key) => availableTabs[key])
    .filter(
      (tab) => tab.availableFor.length === 0 || tab.availableFor.includes(type),
    );

  const options: { [key in MediaLibraryType]?: MediaLibraryTypeOptions } = {
    audio: {
      title: t("Ajouter un audio depuis..."),
      defaultTab: "audio-capture",
    },
    video: {
      title: t("Ajouter une vidéo depuis..."),
      defaultTab: "video-capture",
    },
    image: { title: t("Ajouter une image depuis..."), defaultTab: "workspace" },
    attachment: {
      title: t("Ajouter une pièce jointe depuis..."),
      defaultTab: "workspace",
    },
    hyperlink: { title: t("Ajouter un lien"), defaultTab: "linker" },
    embedder: { title: t("Ajout embed / iframe"), defaultTab: "iframe" },
  };

  const isOpen = !!type;

  const modalHeader = type
    ? t(options[type]?.title ?? "Un titre ici")
    : t("Un titre ici");

  return (
    <Modal id="media-library" isOpen={isOpen} onModalClose={onClose}>
      <Modal.Header onModalClose={onClose}>{modalHeader}</Modal.Header>
      <Modal.Body>
        <Tabs items={tabs} defaultId={tabs[0].id}></Tabs>
      </Modal.Body>
    </Modal>
  );
};

// Add inner tabs implementations to exported component.
Object.assign(MediaLibrary, InnerTabs);

export default MediaLibrary;
