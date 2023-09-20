import { Meta, StoryObj } from "@storybook/react";

import Dropzone from "./Dropzone";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Dropzone> = {
  title: "Components/Dropzone",
  component: Dropzone,
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Base: Story = {};
