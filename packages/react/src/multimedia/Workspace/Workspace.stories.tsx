import { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Workspace, { WorkspaceProps } from "./Workspace";
import { TreeNode } from "../../components";
import { MockedDataProvider } from "../../core";
import { WorkspaceSearchResult } from "../../core/useWorkspaceSearch/useWorkspaceSearch";

const mockedData: WorkspaceSearchResult = [
  {
    id: "folder1",
    name: "level 1 arborescence tree",
    eType: "folder",
  },
  {
    id: "folder2",
    name: "level 1 arborescence tree",
    eType: "folder",
  },
  {
    id: "file1",
    name: "File 1",
    eType: "file",
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
  render: (args: WorkspaceProps) => {
    return (
      <MockedDataProvider
        mocks={{
          workflows: [
            "org.entcore.workspace.controllers.WorkspaceController|listDocuments",
            "org.entcore.workspace.controllers.WorkspaceController|listFolders",
          ],
          workspaceDocuments: mockedData,
        }}
      >
        <Workspace {...args}></Workspace>
      </MockedDataProvider>
    );
  },
};
