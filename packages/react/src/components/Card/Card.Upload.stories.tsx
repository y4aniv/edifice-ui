import { Meta, StoryObj } from "@storybook/react";

import Card, { CardProps } from "./Card";

const meta = {
  title: "Components/Card/Upload Card",
  component: Card,
  args: {
    options: {
      type: "upload",
      name: "Lorem Ipsum",
      info: { type: "Extension File", weight: "200Mo" },
      status: "success",
      imageSrc:
        "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
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
      status: "success",
      type: "upload",
      name: "Lorem Ipsum",
      info: { type: "Extension File", weight: "200Mo" },
      onRetry: () => console.log("retry"),
      onDelete: () => console.log("delete"),
    },
    isLoading: true,
  },
  render: (args: CardProps) => {
    return <Card {...args} />;
  },
};

export const UploadError: Story = {
  args: {
    options: {
      status: "error",
      type: "upload",
      name: "Lorem Ipsum",
      info: { type: "Extension File", weight: "200Mo" },
      onRetry: () => console.log("retry"),
      onDelete: () => console.log("delete"),
      onEdit: () => console.log("edit"),
    },
    isLoading: false,
  },
  render: (args: CardProps) => {
    return <Card {...args} />;
  },
};
