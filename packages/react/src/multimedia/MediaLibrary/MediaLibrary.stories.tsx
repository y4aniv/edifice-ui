import { Meta, StoryObj } from "@storybook/react";

import MediaLibrary, {
  MediaLibraryProps,
  MediaLibraryType,
} from "./MediaLibrary";
import { useState } from "react";
import { MockedDataProvider } from "../../core";
import { WorkspaceElement } from "edifice-ts-client";

const mockedDocuments: WorkspaceElement[] = [
  {
    _id: "folder1",
    name: "level 1 arborescence tree",
    eType: "folder",
    eParent: "",
    _isShared: false,
    _shared: [],
    children: null!,
    created: null as any,
    owner: null as any,
  },
  {
    _id: "folder2",
    name: "level 1 arborescence tree",
    eType: "folder",
    eParent: "",
    _isShared: false,
    _shared: [],
    children: null!,
    created: null as any,
    owner: null as any,
  },
  {
    _id: "file1",
    name: "mp3 audio file",
    eType: "file",
    eParent: "",
    _isShared: false,
    _shared: [],
    children: null!,
    created: null as any,
    owner: null as any,
    metadata: {
      "content-type": "audio/mp3",
    },
  },
  {
    _id: "file2",
    name: "mp4 video file",
    eType: "file",
    eParent: "",
    _isShared: false,
    _shared: [],
    children: null!,
    created: null as any,
    owner: null as any,
    metadata: {
      "content-type": "video/mp4",
    },
  },
];

const meta: Meta<typeof MediaLibrary> = {
  title: "Multimedia/MediaLibrary",
  component: MediaLibrary,
  args: {
    onSuccess: () => {
      alert("Success 👍");
    },
  },
  decorators: [
    (Story) => {
      const [type, setType] = useState<MediaLibraryType | null>(null);
      return (
        <div
          style={{
            height: "350px",
            display: "grid",
            placeItems: "center",
            marginBottom: "10em",
          }}
          className="position-relative"
        >
          <Story />
        </div>
      );
    },
  ],
  render: (args: MediaLibraryProps) => {
    const [type, setType] = useState<MediaLibraryType | null>(null);
    args.onCancel = () => {
      setType(null);
    };

    return (
      <MockedDataProvider
        mocks={{
          workflows: [
            "org.entcore.workspace.controllers.WorkspaceController|listDocuments",
            "org.entcore.workspace.controllers.WorkspaceController|listFolders",
            "org.entcore.workspace.controllers.WorkspaceController|addDocument",
          ],
          workspaceDocuments: mockedDocuments,
        }}
      >
        <button
          onClick={() => {
            setType(args.type);
          }}
        >
          Open Media Library
        </button>

        {<MediaLibrary {...args} type={type} />}
      </MockedDataProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof MediaLibrary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {
    type: "audio",
  },
  parameters: {
    docs: {
      description: {
        story: "Use to choose or capture an audio file.",
      },
    },
  },
};
export const Video: Story = {
  args: {
    type: "video",
  },
  parameters: {
    docs: {
      description: {
        story: "Use to choose, embed or capture a video.",
      },
    },
  },
};

export const Image: Story = {
  args: {
    type: "image",
  },
  parameters: {
    docs: {
      description: {
        story: "Use to choose an image.",
      },
    },
  },
};

export const Attachment: Story = {
  args: {
    type: "attachment",
  },
  parameters: {
    docs: {
      description: {
        story: "Use to choose and attach a media file.",
      },
    },
  },
};

export const Embedder: Story = {
  args: {
    type: "embedder",
  },
  parameters: {
    docs: {
      description: {
        story: "Use to embed an external.",
      },
    },
  },
};

export const Linker: Story = {
  args: {
    type: "hyperlink",
  },
  parameters: {
    docs: {
      description: {
        story: "Use to link an internal resource, or an external website.",
      },
    },
  },
};
