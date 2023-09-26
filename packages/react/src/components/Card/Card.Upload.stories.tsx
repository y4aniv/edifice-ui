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
      weightFile: 200,
      successUpload: true,
      uploadLoading: false,
      onDelete: () => console.log("delete"),
      onEdit: () => console.log("edit"),
    },
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const UploadSuccess: Story = {
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
      onRetry: () => console.log("retry"),
      onDelete: () => console.log("delete"),
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
      onRetry: () => console.log("retry"),
      onDelete: () => console.log("delete"),
      onEdit: () => console.log("edit"),
    },
  },
  render: (args: CardProps) => {
    return <Card {...args} />;
  },
};
