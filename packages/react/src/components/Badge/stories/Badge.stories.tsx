import { Meta, StoryObj } from "@storybook/react";

import Badge, { BadgeProps } from "../Badge";
import {
  AddUser,
  Close,
  Hourglass,
  RafterLeft,
  RafterRight,
} from "@edifice-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Badge> = {
  title: "Components/Badges/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: [
        ,
        "primary",
        "secondary",
        "tertiary",
        "danger",
        "warning",
        "info",
      ],
      control: { type: "select" },
    },
    variant: {
      options: ["fill", "outline"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
  args: {
    variant: "fill",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    variant: "fill",
    children: "I am a badge",
  },
};
