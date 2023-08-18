import { Meta, StoryObj } from "@storybook/react";

import ColorPicker, { ColorPickerProps } from "./ColorPicker";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    docs: {
      description: {
        component:
          "The ColorPicker allows users to choose one color among a list of available colors. There are two predefined lists of available colors : standard and accessible",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Base: Story = {};
