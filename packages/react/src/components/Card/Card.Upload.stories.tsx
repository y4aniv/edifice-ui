import { Meta, StoryObj } from "@storybook/react";

import Card, { CardProps } from "./Card";

const meta = {
  title: "Components/Card/Upload Card",
  component: Card,
  args: {
    options: {
      type: "upload",
      name: "Lorem Ipsum",
      extensionFile: "Extension File",
      successUpload: true,
      uploadLoading: false,
    },
    app: {
      icon: "blog",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Blog",
      scope: [],
    },
    isLoading: false,
    onOpen: () => console.log("open"),
    onSelect: () => console.log("select"),
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Upload: Story = {
  render: (args: CardProps) => {
    return <Card {...args} />;
  },
};

export const UploadLoading: Story = {
  args: {
    options: {
      successUpload: true,
      uploadLoading: true,
      type: "upload",
      name: "Lorem Ipsum",
      extensionFile: "Extension File",
    },
  },
  render: (args: CardProps) => {
    return <Card {...args} />;
  },
};

export const UploadError: Story = {
  args: {
    options: {
      successUpload: false,
      uploadLoading: false,
      type: "upload",
      name: "Lorem Ipsum",
      extensionFile: "Extension File",
    },
  },
  render: (args: CardProps) => {
    return <Card {...args} />;
  },
};
