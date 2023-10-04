import { useEffect, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";
import Combobox from "./Combobox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Base: Story = {};
