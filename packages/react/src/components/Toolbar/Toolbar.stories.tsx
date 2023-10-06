import { Meta, StoryObj } from "@storybook/react";

import Toolbar from "./Toolbar";
import { RecordVideo, Save, Write, Plus, Delete } from "@edifice-ui/icons";
import { Dropdown } from "../Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Toolbar> = {
  title: "Components/Toolbar",
  component: Toolbar,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    variant: {
      options: ["default", "no-shadow"],
      control: { type: "select" },
    },
    isBlock: { control: "boolean" },
    align: {
      options: ["left", "center", "space", "right"],
      control: { type: "select" },
    },
  },
  args: {
    data: [
      {
        action: () => console.log("on click"),
        icon: <RecordVideo />,
        label: "record",
        name: "record",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Save />,
        label: "save",
        name: "save",
        isEnable: true,
      },
      {
        type: "divider",
      },
      {
        action: () => console.log("on click"),
        icon: <Write />,
        label: "write",
        name: "write",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Delete />,
        label: "delete",
        name: "delete",
        isEnable: true,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Base: Story = {
  render: (args) => <Toolbar {...args} />,
};

export const Disable: Story = {
  render: (args) => <Toolbar {...args} />,
  args: {
    data: [
      {
        action: () => console.log("on click"),
        icon: <RecordVideo />,
        label: "record",
        name: "record",
        isEnable: false,
      },
      {
        action: () => console.log("on click"),
        icon: <Save />,
        label: "save",
        name: "save",
        isEnable: true,
      },
      {
        type: "divider",
      },
      {
        action: () => console.log("on click"),
        icon: <Write />,
        label: "write",
        name: "write",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Delete />,
        label: "delete",
        name: "delete",
        isEnable: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "When data object has `isEnable` set to `false`, it will not be displayed",
      },
    },
  },
};

export const WithDivider: Story = {
  render: (args) => <Toolbar {...args} />,
  args: {
    data: [
      {
        action: () => console.log("on click"),
        icon: <RecordVideo />,
        label: "record",
        name: "record",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Save />,
        label: "save",
        name: "save",
        isEnable: true,
      },
      {
        type: "divider",
      },
      {
        action: () => console.log("on click"),
        icon: <Write />,
        label: "write",
        name: "write",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Delete />,
        label: "delete",
        name: "delete",
        isEnable: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Add a data object only with `type` to `divider` to show a divider element",
      },
    },
  },
};

export const WithPrimaryAction: Story = {
  render: (args) => <Toolbar {...args} />,
  args: {
    data: [
      {
        action: () => console.log("on click"),
        icon: <Save />,
        label: "save",
        name: "save",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Write />,
        label: "write",
        name: "write",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Plus />,
        label: "plus",
        name: "plus",
        type: "primary",
        isEnable: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A data object with `type` to `primary` will be considered as primary action and will be shown to the end of Toolbar. It will accept the same properties as a data object",
      },
    },
  },
};

export const WithDropdownAction: Story = {
  render: (args) => <Toolbar {...args} />,
  decorators: [(Story) => <div style={{ height: "300px" }}>{Story()}</div>],
  args: {
    data: [
      {
        action: () => console.log("on click"),
        icon: <Save />,
        label: "save",
        name: "save",
        isEnable: true,
      },
      {
        action: () => console.log("on click"),
        icon: <Write />,
        label: "write",
        name: "write",
        hasDropdown: true,
        content: () => (
          <Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => console.log("click 1")}>
                Write something...
              </Dropdown.Item>
              <Dropdown.Item onClick={() => console.log("click 2")}>
                Edit something...
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
        isEnable: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "By adding `hasDropdown` to `true` and a content key representing `() => ReactNode` item becomes a dropdown",
      },
    },
  },
};

export const WithoutShadow: Story = {
  render: (args) => <Toolbar {...args} variant="no-shadow" />,
  parameters: {
    docs: {
      description: {
        story: "By adding `variant` to `no-shadow`, box-shadow is disabled.",
      },
    },
  },
};
