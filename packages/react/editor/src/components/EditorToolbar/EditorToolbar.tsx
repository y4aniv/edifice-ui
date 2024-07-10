import { RefAttributes, RefObject, useMemo } from "react";

import {
  AlignLeft,
  Paperclip,
  Landscape,
  Link,
  Mic,
  RecordVideo,
  TextBold,
  TextItalic,
  TextUnderline,
  SpeechToText,
  BulletList,
  Undo,
  Redo,
  Cantoo,
  Checklist,
} from "@edifice-ui/icons";
import {
  ToolbarItem,
  IconButtonProps,
  MediaLibraryRef,
  Toolbar,
} from "@edifice-ui/react";
import { useTranslation } from "react-i18next";

import { EditorToolbarDropdownMenu } from "./EditorToolbar.DropdownMenu";
import { EditorToolbarEmoji } from "./EditorToolbar.Emoji";
import { EditorToolbarHighlightColor } from "./EditorToolbar.HighlightColor";
import { EditorToolbarPlusMenu } from "./EditorToolbar.PlusMenu";
import { EditorToolbarTextColor } from "./EditorToolbar.TextColor";
import { EditorToolbarTextSize } from "./EditorToolbar.TextSize";
import { EditorToolbarTypography } from "./EditorToolbar.Typography";
import {
  useActionOptions,
  useEditorContext,
  useSpeechRecognition,
} from "../..";
import { hasExtension } from "../../utils/has-extension";
import { hasMark } from "../../utils/has-mark";
import { hasTextStyle } from "../../utils/has-text-style";
import { useCantoo } from "../../hooks/useCantoo.ts";

interface Props {
  /** Ref to a MediaLibrary instance */
  mediaLibraryRef: RefObject<MediaLibraryRef>;
  /** API to open/close a Math modal. */
  toggleMathsModal: Function;
  /** API to open/close a QCM modal. */
  toggleQcmModal: Function;
}

export const EditorToolbar = ({
  mediaLibraryRef,
  toggleMathsModal,
  toggleQcmModal,
}: Props) => {
  const { t } = useTranslation();
  const { id, editor } = useEditorContext();

  const [plusOptions, listOptions, alignmentOptions] = useActionOptions(
    editor,
    toggleMathsModal,
    mediaLibraryRef,
  );

  const {
    isAvailable: canRecognizeSpeech,
    isActive: speechRecognition,
    toggle: toggleSpeechRecognition,
  } = useSpeechRecognition(editor);

  const { isAvailable: canUseCantoo } = useCantoo();

  const toolbarItems: ToolbarItem[] = useMemo(() => {
    const showIf = (truthy: boolean) => (truthy ? "show" : "hide");

    const showLinkModal = () => {
      const { state } = editor!;
      if (state.selection.empty) {
        mediaLibraryRef.current?.show("hyperlink");
      } else {
        mediaLibraryRef.current?.showLink({
          link: {
            text: state.selection.content().content.child(0).textContent,
            target: "_blank",
          },
          multiNodeSelected: state.selection.content().content.childCount > 1,
        });
      }
    };

    return [
      //--------------- UNDO ---------------//
      {
        type: "icon",
        props: {
          icon: <Undo />,
          "aria-label": t("editor.option.undo"),
          onClick: () => editor?.chain().focus().undo().run(),
          disabled: !editor?.can().undo(),
        },
        name: "undo",
        tooltip: t("editor.option.undo"),
        visibility: showIf(hasExtension("history", editor)),
      },
      //--------------- REDO ---------------//
      {
        type: "icon",
        props: {
          icon: <Redo />,
          "aria-label": t("editor.option.redo"),
          onClick: () => editor?.chain().focus().redo().run(),
          disabled: !editor?.can().redo(),
        },
        name: "redo",
        tooltip: t("editor.option.redo"),
        visibility: showIf(hasExtension("history", editor)),
      },
      //-------------------------------------//
      {
        type: "divider",
        name: "div-1",
      },
      //--------------- IMAGE ---------------//
      {
        type: "icon",
        props: {
          icon: <Landscape />,
          className: "bg-green-200",
          "aria-label": t("tiptap.toolbar.picture"),
          onClick: () => mediaLibraryRef.current?.show("image"),
        },
        name: "image",
        tooltip: t("tiptap.toolbar.picture"),
      },
      //--------------- VIDEO ---------------//
      {
        type: "icon",
        props: {
          icon: <RecordVideo />,
          className: "bg-purple-200",
          "aria-label": t("tiptap.toolbar.video"),
          onClick: () => mediaLibraryRef.current?.show("video"),
        },
        name: "video",
        tooltip: t("tiptap.toolbar.video"),
      },
      //--------------- AUDIO ---------------//
      {
        type: "icon",
        props: {
          icon: <Mic />,
          className: "bg-red-200",
          "aria-label": t("tiptap.toolbar.audio"),
          onClick: () => mediaLibraryRef.current?.show("audio"),
        },
        name: "audio",
        tooltip: t("tiptap.toolbar.audio"),
      },
      //--------------- ATTACHMENT ---------------//
      {
        type: "icon",
        props: {
          icon: <Paperclip />,
          className: "bg-yellow-200",
          "aria-label": t("tiptap.toolbar.attachment"),
          onClick: () => mediaLibraryRef.current?.show("attachment"),
        },
        name: "attachment",
        tooltip: t("tiptap.toolbar.attachment"),
      },
      //------------- CANTOO ---------------//
      {
        type: "icon",
        props: {
          icon: <Cantoo />,
          className: "bg-gray-200",
          "aria-label": t("tiptap.toolbar.cantoo"),
          // @ts-ignore
          onClick: () => editor?.commands.runCantoo(),
        },
        name: "cantoo",
        tooltip: t("tiptap.toolbar.cantoo"),
        visibility: canUseCantoo ? "show" : "hide",
      },
      {
        type: "divider",
        name: "div-2",
      },
      //--------------- SPEECH TO TEXT ---------------//
      {
        type: "icon",
        props: {
          icon: <SpeechToText />,
          "aria-label": t("tiptap.toolbar.stt"),
          className: speechRecognition ? "is-selected" : "",
          onClick: () => toggleSpeechRecognition(),
        },
        visibility: canRecognizeSpeech ? "show" : "hide",
        name: "speechtotext",
        tooltip: t("tiptap.toolbar.stt"),
      },
      //------------------------------------//
      {
        type: "divider",
        name: "div-speech",
        visibility: canRecognizeSpeech ? "show" : "hide",
      },
      //--------------- TYPOGRAPHY ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
          ) => <EditorToolbarTypography triggerProps={triggerProps} />,
        },
        name: "text_typo",
        visibility: showIf(hasExtension("fontFamily", editor)),
        tooltip: t("tiptap.toolbar.typo.choice"),
      },
      //--------------- TEXT SIZE ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
          ) => <EditorToolbarTextSize triggerProps={triggerProps} />,
        },
        name: "text_size",
        visibility: showIf(
          hasExtension("fontSize", editor) || hasExtension("heading", editor),
        ),
        tooltip: t("tiptap.toolbar.size.choice"),
      },
      //--------------- TEXT COLOR ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
            itemRefs: any,
          ) => (
            <EditorToolbarTextColor
              triggerProps={triggerProps}
              itemRefs={itemRefs}
            />
          ),
        },
        overflow: false,
        name: "color",
        visibility: hasTextStyle("color", editor) ? "show" : "hide",
        tooltip: t("tiptap.toolbar.color.text"),
      },
      //--------------- TEXT HIGHLIGHTING COLOR ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
            itemRefs: any,
          ) => (
            <EditorToolbarHighlightColor
              triggerProps={triggerProps}
              itemRefs={itemRefs}
            />
          ),
        },
        name: "highlight",
        visibility: showIf(hasMark("customHighlight", editor)),
        tooltip: t("tiptap.toolbar.highlight.back"),
      },
      //-------------------------------------//
      {
        type: "divider",
        name: "div-3",
      },
      //--------------- BOLD ---------------//
      {
        type: "icon",
        props: {
          icon: <TextBold />,
          "aria-label": t("tiptap.toolbar.bold"),
          className: editor?.isActive("bold") ? "is-selected" : "",
          onClick: () => editor?.chain().focus().toggleBold().run(),
          disabled: editor?.isActive("heading"),
        },
        name: "bold",
        visibility: showIf(hasMark("bold", editor)),
        tooltip: t("tiptap.toolbar.bold"),
      },
      //--------------- ITALIC ---------------//
      {
        type: "icon",
        props: {
          icon: <TextItalic />,
          "aria-label": t("tiptap.toolbar.italic"),
          className: editor?.isActive("italic") ? "is-selected" : "",
          onClick: () => editor?.chain().focus().toggleItalic().run(),
        },
        name: "italic",
        visibility: showIf(hasMark("italic", editor)),
        tooltip: t("tiptap.toolbar.italic"),
      },
      //--------------- UNDERLINE ---------------//
      {
        type: "icon",
        props: {
          icon: <TextUnderline />,
          "aria-label": t("tiptap.toolbar.underline"),
          className: editor?.isActive("underline") ? "is-selected" : "",
          onClick: () => editor?.chain().focus().toggleUnderline().run(),
        },
        name: "underline",
        visibility: showIf(hasMark("underline", editor)),
        tooltip: t("tiptap.toolbar.underline"),
      },
      //-------------------------------------//
      {
        type: "divider",
        name: "div-4",
      },
      //--------------- EMOJI ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
            itemRefs: any,
          ) => (
            <EditorToolbarEmoji
              triggerProps={triggerProps}
              itemRefs={itemRefs}
            />
          ),
        },
        name: "emoji",
        tooltip: t("tiptap.toolbar.emojisPicker"),
      },
      //--------------- LINKER (internal / external) ---------------//
      {
        type: "icon",
        props: {
          icon: <Link />,
          "aria-label": t("tiptap.toolbar.linker"),
          className: editor?.isActive("linker") ? "is-selected" : "",
          onClick: () => showLinkModal(),
        },
        name: "linker",
        tooltip: t("tiptap.toolbar.linker"),
      },
      // -------------- QCM ---------------//
      {
        type: "icon",
        props: {
          icon: <Checklist />,
          "aria-label": t("tiptap.toolbar.qcm"),
          onClick: () => {
            toggleQcmModal();
          },
        },
        name: "qcm",
        tooltip: t("tiptap.toolbar.qcm"),
      },
      //-----------------------------------//
      {
        type: "divider",
        name: "div-5",
      },
      //--------------- LIST MENU ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
          ) => (
            <EditorToolbarDropdownMenu
              triggerProps={triggerProps}
              icon={<BulletList />}
              ariaLabel={t("tiptap.toolbar.listoptions")}
              options={listOptions}
            />
          ),
        },
        name: "list",
        visibility: showIf(hasExtension("starterKit", editor)),
        tooltip: t("tiptap.toolbar.listoptions"),
      },
      //--------------- TEXT ALIGNMENT ---------------//
      {
        type: "dropdown",
        props: {
          children: (
            triggerProps: JSX.IntrinsicAttributes &
              Omit<IconButtonProps, "ref"> &
              RefAttributes<HTMLButtonElement>,
          ) => (
            <EditorToolbarDropdownMenu
              triggerProps={triggerProps}
              icon={<AlignLeft />}
              ariaLabel={t("tiptap.toolbar.align")}
              options={alignmentOptions}
            />
          ),
        },
        name: "alignment",
        visibility: showIf(hasExtension("textAlign", editor)),
        tooltip: t("tiptap.toolbar.align"),
      },
      //-------------------------------------//
      {
        type: "divider",
        name: "div-6",
      },
      //--------------- MORE sub-menu ---------------//
      {
        type: "dropdown",
        props: {
          children: () => <EditorToolbarPlusMenu options={plusOptions} />,
        },
        name: "plus",
        visibility: showIf(hasExtension("textAlign", editor)),
      },
    ];
  }, [
    alignmentOptions,
    canRecognizeSpeech,
    editor,
    listOptions,
    mediaLibraryRef,
    plusOptions,
    speechRecognition,
    t,
    toggleSpeechRecognition,
  ]);

  return (
    <div className="sticky-top z-1 editor-toolbar rounded-3">
      <Toolbar
        items={toolbarItems}
        variant="no-shadow"
        className="rounded-top-3"
        isBlock
        align="left"
        ariaControls={id}
      />
    </div>
  );
};
