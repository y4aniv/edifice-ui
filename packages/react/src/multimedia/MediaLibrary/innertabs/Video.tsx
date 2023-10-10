import { WorkspaceElement } from "edifice-ts-client";
import { useTranslation } from "react-i18next";

import { VideoRecorder } from "../../VideoRecorder";
import { useMediaLibraryContext } from "../MediaLibraryContext";

export const Video = () => {
  const context = useMediaLibraryContext();
  const { t } = useTranslation();

  const handleSuccess = (res: WorkspaceElement) => {
    context.setResult(res);
  };

  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <VideoRecorder
      appCode={context.appCode}
      caption={t("video.caption")}
      onSuccess={handleSuccess}
      onError={handleError}
    ></VideoRecorder>
  );
};
