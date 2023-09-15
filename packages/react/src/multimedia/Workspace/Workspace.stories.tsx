import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Workspace from "./Workspace";
import { TreeNode } from "../../components";

const mockedData: TreeNode[] = [
  {
    id: "1",
    name: "level 1 arborescence tree",
    children: [
      {
        id: "4",
        name: "level 2 arborescence tree",
        children: [
          {
            id: "8",
            name: "level 3 arborescence tree",
            children: [
              {
                id: "12",
                name: "level 4 arborescence tree",
              },
              {
                id: "13",
                name: "level 4 arborescence tree",
              },
            ],
          },
          {
            id: "9",
            name: "level 3 arborescence tree",
          },
        ],
      },
      {
        id: "5",
        name: "level 2 arborescence tree",
        children: [
          {
            id: "10",
            name: "level 3 arborescence tree",
          },
          {
            id: "11",
            name: "level 3 arborescence tree",
          },
        ],
      },
    ],
  },
];

const meta: Meta<typeof Workspace> = {
  title: "Multimedia/Workspace",
  component: Workspace,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Workspace>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The Workspace component allows the user to choose one or more files among all the online files he has access to in the system.",
      },
    },
  },
};
