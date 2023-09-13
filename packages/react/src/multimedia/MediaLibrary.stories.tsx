import { Meta, StoryObj } from "@storybook/react";

import MediaLibrary, { MediaLibraryProps } from "./MediaLibrary";
import { useState } from "react";

const meta: Meta<typeof MediaLibrary> = {
  title: "Multimedia/MediaLibrary",
  component: MediaLibrary,
  args: {
    onSuccess: () => {
      alert("Success 👍");
    },
  },
  render: (args: MediaLibraryProps) => {
    const [display, setDisplay] = useState(false);
    args.onClose = () => {
      setDisplay(false);
    };

    return (
      <>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Open Media Library
        </button>

        {display && <MediaLibrary {...args} />}
      </>
    );
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200px",
          display: "grid",
          placeItems: "center",
          marginBottom: "10em",
        }}
        className="position-relative"
      >
        <Story />
      </div>
    ),
  ],
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
  render: (args: MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
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
