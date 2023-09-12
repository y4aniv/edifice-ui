import { ReactNode, useCallback, useEffect, useState } from "react";

import {
  Camera,
  ExternalLink,
  Folder,
  Mic,
  RecordVideo,
} from "@edifice-ui/icons";
import { useTranslation } from "react-i18next";

import { MediaLibraryAudio } from "./MediaLibraryAudio";
import Modal from "../components/Modal/Modal";
import { Tabs } from "../components/Tabs";
import { TabsItemProps } from "../components/Tabs/TabsItem";

/**
 * Pre-configured types of media libraries.
 * Choosing a type will display the useful tabs working with it.
 */
export type MediaLibraryType = "audio" | "video" | "image" | "link";

/** Available features exposed by tabs. */
type AvailableTab =
  | "workspace"
  | "device"
  | "audio-capture"
  | "video-capture"
  | "external-linker"
  | "internal-linker";

type MediaLibraryTypeOptions = {
  title: string;
  defaultTab: AvailableTab;
};

/** Type of response the media library will send on success. */
export type MediaLibraryResponse = () => void;

/**
 * MediaLibrary properties
 */
export interface MediaLibraryProps {
  type: MediaLibraryType;
  onSuccess: MediaLibraryResponse;
  onClose: () => void;
}

declare type MediaLibrary = (props: MediaLibraryProps) => ReactNode & {
  Workspace: (props: { onSuccess: MediaLibraryResponse }) => ReactNode;
  Audio: (props: { onSuccess: MediaLibraryResponse }) => ReactNode;
  Video: (props: { onSuccess: MediaLibraryResponse }) => ReactNode;
  Linker: (props: { onSuccess: MediaLibraryResponse }) => ReactNode;
};

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

export const MediaLibrary = ({
  type,
  onSuccess,
  onClose,
}: MediaLibraryProps) => {
  const { t } = useTranslation();

  const availableTabs: {
    [tabname in AvailableTab]: TabsItemProps & {
      availableFor: Array<MediaLibraryType>;
    };
  } = {
    workspace: {
      id: "workspace",
      icon: <Folder />,
      label: "Espace doc.",
      content: <MediaLibrary.Workspace onSuccess={onSuccess} />,
      availableFor: ["link", "audio"],
    },
    device: {
      id: "camera",
      icon: <Camera />,
      label: "Mon appareil",
      content: <MediaLibrary.Video onSuccess={onSuccess} />,
      availableFor: ["audio", "link"],
    },
    "video-capture": {
      id: "video",
      icon: <RecordVideo />,
      label: "Captation vidéo",
      content: <MediaLibrary.Video onSuccess={onSuccess} />,
      availableFor: ["video"],
    },
    "audio-capture": {
      id: "audio",
      icon: <Mic />,
      label: "Captation audio",
      content: <MediaLibrary.Audio onSuccess={onSuccess} />,
      availableFor: ["audio"],
    },
    "internal-linker": {
      id: "internal",
      icon: <Folder />,
      label: "Lien interne",
      content: <MediaLibrary.Linker onSuccess={onSuccess} />,
      availableFor: ["link"],
    },
    "external-linker": {
      id: "external",
      icon: <ExternalLink />,
      label: "Lien externe",
      content: <MediaLibrary.Linker onSuccess={onSuccess} />,
      availableFor: ["video", "link"],
    },
  };

  const tabs = Object.values(availableTabs).filter((tab) =>
    tab.availableFor.includes(type),
  );

  const options: { [key in MediaLibraryType]?: MediaLibraryTypeOptions } = {
    audio: { title: t("Un son"), defaultTab: "audio-capture" },
    video: { title: t("Une vid"), defaultTab: "video-capture" },
    image: { title: t("Une image"), defaultTab: "workspace" },
    link: { title: t("Un document"), defaultTab: "workspace" },
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

MediaLibrary.Workspace = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <p>
      TODO: Workspace <button onClick={onSuccess}>successful</button>
    </p>
  );
};

MediaLibrary.Audio = MediaLibraryAudio;

MediaLibrary.Video = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <p>
      TODO: Video <button onClick={onSuccess}>successful</button>
    </p>
  );
};

MediaLibrary.Linker = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <p>
      TODO: Linker <button onClick={onSuccess}>successful</button>
    </p>
  );
};

MediaLibrary.Attachment = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <p>
      TODO: Attachment <button onClick={onSuccess}>successful</button>
    </p>
  );
};

export default MediaLibrary;
