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
  render: (args:MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
  args: {
    type: "audio",
  },
  parameters: {
    docs: {
      description: {
        story: "Audio library.",
      },
    },
  },
};

export const Video: Story = {
  render: (args:MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
  args: {
    type: "video",
  },
  parameters: {
    docs: {
      description: {
        story: "Video library.",
      },
    },
  },
};

export const Attachment: Story = {
  render: (args:MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
  args: {
    type: "attachment",
  },
  parameters: {
    docs: {
      description: {
        story: "Attachment library.",
      },
    },
  },
};

export const Linker: Story = {
  render: (args:MediaLibraryProps) => {
    return <MediaLibrary {...args} />;
  },
  args: {
    type: "linker",
  },
  parameters: {
    docs: {
      description: {
        story: "Linker library.",
      },
    },
  },
};
