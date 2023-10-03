import { Meta, StoryObj } from "@storybook/react";

import { DefaultPalette } from "./ColorPalette";
import { useState } from "react";
import ColorPickerItem, { ColorPickerItemProps } from "./ColorPickerItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ColorPickerItem> = {
  title: "Components/ColorPickerItem",
  component: ColorPickerItem,
  parameters: {
    docs: {
      description: {
        component: "The ColorPickerItem is used to render a color",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPickerItem>;

export const Base: Story = {
  args: {
    model: { value: "red", description: "Red as a keyword" },
    onChange: (item) => {
      alert(`${item.description} is a beautiful color !`);
    },
  },
};

export const Reset: Story = {
  args: {
    model: {
      value: "transparent",
      description: "Transparent",
      hue: "light",
      isReset: true,
    },
    onChange: (item) => {
      alert(`${item.description} better be a reset color !`);
    },
  },
};

export const Dark: Story = {
  args: {
    model: { value: "#000", description: "Black" },
    selected: true,
    onChange: (item) => {
      alert(`${item.description} is dark, and selected !`);
    },
  },
};

export const Light: Story = {
  args: {
    model: { value: "#fff", description: "White", hue: "light" },
    selected: true,
    onChange: (item) => {
      alert(`${item.description} is light, and selected !`);
    },
  },
};

export const ClassName: Story = {
  args: {
    model: {
      value: "transparent",
      description: "Transparent color",
      hue: "light",
    },
    selected: true,
    className: "border-0",
    onChange: (item) => {
      alert(`${item.description} without a border !`);
    },
  },
};
