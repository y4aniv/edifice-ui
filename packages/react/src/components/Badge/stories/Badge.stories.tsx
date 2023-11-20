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
    variant: {
      control: { type: "radio" },
      options: [
        "notification",
        "profile / student",
        "profile / teacher",
        "profile / relative",
        "profile / personnel",
      ],
      mapping: {
        notification: { type: "notification" },
        "profile / student": { type: "profile", profile: "student" },
        "profile / teacher": { type: "profile", profile: "teacher" },
        "profile / relative": { type: "profile", profile: "relative" },
        "profile / personnel": { type: "profile", profile: "personnel" },
      },
    },
  },
  args: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    children: "999+",
    variant: { type: "notification" },
  },
};

export const StudentProfileBadge: Story = {
  args: {
    variant: { type: "profile", profile: "student" },
  },

  render: (args: BadgeProps) => {
    return (
      <p>
        Hello, i am a <Badge {...args}>student</Badge> badge.
      </p>
    );
  },
};

export const TeacherProfileBadge: Story = {
  args: {
    variant: { type: "profile", profile: "teacher" },
  },

  render: (args: BadgeProps) => {
    return (
      <p>
        Hello, i am a <Badge {...args}>teacher</Badge> badge.
      </p>
    );
  },
};

export const RelativeProfileBadge: Story = {
  args: {
    variant: { type: "profile", profile: "relative" },
  },

  render: (args: BadgeProps) => {
    return (
      <p>
        Hello, i am a <Badge {...args}>relative</Badge> badge.
      </p>
    );
  },
};

export const PersonnelProfileBadge: Story = {
  args: {
    variant: { type: "profile", profile: "personnel" },
  },

  render: (args: BadgeProps) => {
    return (
      <p>
        Hello, i am a <Badge {...args}>personnel</Badge> badge.
      </p>
    );
  },
};
