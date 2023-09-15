import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Workspace from "./Workspace";

const mockedData = {
  children: [
    {
      children: [
        {
          children: [
            {
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
              id: "8",
              name: "level 3 arborescence tree",
            },
            {
              id: "9",
              name: "level 3 arborescence tree",
            },
          ],
          id: "4",
          name: "level 2 arborescence tree",
        },
        {
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
          id: "5",
          name: "level 2 arborescence tree",
        },
      ],
      id: "1",
      name: "level 1 arborescence tree",
    },
    {
      children: [
        {
          id: "6",
          name: "level 2 arborescence tree",
        },
        {
          id: "7",
          name: "level 2 arborescence tree",
        },
      ],
      id: "2",
      name: "level 1 arborescence tree",
    },
    {
      id: "3",
      name: "level 1 arborescence tree",
    },
  ],
  id: "root",
  name: "Section Element",
  section: true,
};

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
        story: "Say hello.",
      },
    },
  },
};
