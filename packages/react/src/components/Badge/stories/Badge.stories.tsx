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
        "dark",
        "light",
        "primary",
        "secondary",
        "danger",
        "warning",
        "info",
        "success",
      ],
      control: { type: "select" },
    },
    variant: {
      options: ["fill", "outline"],
      control: { type: "select" },
    },
  },
  args: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    children: "I am a badge",
  },
};

export const SurroundedBadge: Story = {
  args: {
    children: "a badge",
  },

  render: (args: BadgeProps) => {
    return (
      <p>
        Here is a paragraph, with <Badge {...args}></Badge> within it.
      </p>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "A badge is a span and can be sourrounded by other HTML element or text nodes.",
      },
    },
  },
};
