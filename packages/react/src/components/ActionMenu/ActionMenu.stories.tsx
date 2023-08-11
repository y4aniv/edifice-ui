import { Meta, StoryObj } from "@storybook/react";
import ActionMenu, { ActionMenuProps } from "./ActionMenu";
import {
  TextVanilla,
  Superscript,
  Subscript,
  SquareRoot,
  Code,
  Table,
} from "@edifice-ui/icons";
import { Dropdown, DropdownTrigger } from "../Dropdown";

const meta: Meta<typeof ActionMenu> = {
  title: "Components/ActionMenu",
  component: ActionMenu,
  args: {
    id: "action-menu-id",
    options: [
      {
        icon: <TextVanilla />,
        label: "Supprimer la mise en forme",
        action: () => console.log("click"),
      },
      {
        type: "divider",
      },
      { icon: <Table />, label: "Tableau", action: () => console.log("click") },
      {
        type: "divider",
      },
      {
        icon: <Superscript />,
        label: "Exposant",
        action: () => console.log("click"),
      },
      {
        icon: <Subscript />,
        label: "Indice",
        action: () => console.log("click"),
      },
      {
        icon: <SquareRoot />,
        label: "Formule mathématique",
        action: () => console.log("click"),
      },
      {
        type: "divider",
      },
      {
        icon: <Code />,
        label: "Élément embed/iframe",
        action: () => console.log("click"),
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ActionMenu>;

export const Base: Story = {
  render: (args: ActionMenuProps) => <ActionMenu {...args} />,
};

export const DropdownActionMenu: Story = {
  render: (args: ActionMenuProps) => (
    <Dropdown
      trigger={<DropdownTrigger title="Plus" variant="ghost" />}
      content={<ActionMenu {...args} />}
    />
  ),
  decorators: [(Story) => <div style={{ height: "600px" }}>{Story()}</div>],
};
