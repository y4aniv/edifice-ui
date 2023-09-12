import { Meta, StoryObj } from "@storybook/react";

import MediaLibrary, { MediaLibraryProps } from "./MediaLibrary";

const meta: Meta<typeof MediaLibrary> = {
  title: "Multimedia/MediaLibrary",
  component: MediaLibrary,
  args: {
    onSuccess: () => {
      alert("Success 👍");
    },
  },
};

export default meta;

type Story = StoryObj<typeof MediaLibrary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  render: (args: MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
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
  render: (args: MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
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
  render: (args: MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
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
  render: (args: MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
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
  render: (args: MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
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
