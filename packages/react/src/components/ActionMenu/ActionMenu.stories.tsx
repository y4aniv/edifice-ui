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
  /* args: {
    children: (
      <>
        <Button type="button" variant="filled" color="primary">
          Créer
        </Button>
        <Button type="button" variant="filled" color="primary">
          Modifier
        </Button>
        <Button type="button" variant="filled" color="primary">
          Publier
        </Button>
      </>
    ),
  }, */
};
