import { MimeTypeUtils } from "./MimeTypeUtils";

export class FileTypeUtils {
  private static fileTypes: ContentTypeToFileType[] = [];
  static registerContentTypeToFileType(mapper: ContentTypeToFileType) {
    this.fileTypes.push(mapper);
  }
  static getFileType(
    fileType: string,
    previewRole: boolean = false,
    extension?: string,
  ) {
    extension && (extension = extension.trim());
    if (!fileType) return "unknown";
    if (!this.fileTypes) {
      console.warn("[Element.role] should not have emptyRoles", this);
    }
    for (let FileType of this.fileTypes || []) {
      const role = FileType(fileType, previewRole);
      if (role) {
        return role;
      }
    }
    const types = {
      csv: function (type: string): boolean {
        if (MimeTypeUtils.INSTANCE.isCsvLike(type, extension)) {
          return true;
        }
        return false;
      },
      doc: function (type: string): boolean {
        if (MimeTypeUtils.INSTANCE.isWordLike(type, extension)) {
          return true;
        }
        return (
          type.indexOf("document") !== -1 &&
          type.indexOf("wordprocessing") !== -1
        );
      },
      xls: function (type: string): boolean {
        if (MimeTypeUtils.INSTANCE.isExcelLike(type, extension)) {
          return true;
        }
        return (
          (type.indexOf("document") !== -1 &&
            type.indexOf("spreadsheet") !== -1) ||
          type.indexOf("ms-excel") !== -1
        );
      },
      img: function (type: string): boolean {
        return type.indexOf("image") !== -1;
      },
      pdf: function (type: string): boolean {
        return type.indexOf("pdf") !== -1 || type === "application/x-download";
      },
      ppt: function (type: string): boolean {
        if (MimeTypeUtils.INSTANCE.isPowerpointLike(type, extension)) {
          return true;
        }
        return (
          (type.indexOf("document") !== -1 &&
            type.indexOf("presentation") !== -1) ||
          type.indexOf("powerpoint") !== -1
        );
      },
      txt: function (type: string): boolean {
        return MimeTypeUtils.INSTANCE.isTxtLike(type, extension);
      },
      video: function (type: string): boolean {
        return type.indexOf("video") !== -1;
      },
      audio: function (type: string): boolean {
        return type.indexOf("audio") !== -1;
      },
      zip: function (type: string): boolean {
        return (
          type.indexOf("zip") !== -1 ||
          type.indexOf("rar") !== -1 ||
          type.indexOf("tar") !== -1 ||
          type.indexOf("7z") !== -1
        );
      },
    } as { [key: string]: (type: string) => boolean };

    for (let type in types) {
      if (types[type](fileType)) {
        return type;
      }
    }

    return "unknown";
  }
}

export type ContentTypeToFileType = (
  contentType: string,
  previewRole: boolean,
) => string | undefined;
