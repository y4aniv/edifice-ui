import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import SelectList, { SelectListProps } from "./SelectList";
import { Headphone, Block, Lock, TextSize } from "@edifice-ui/icons";
import Dropdown from "./Dropdown";
import DropdownTrigger from "./DropdownTrigger";

const meta: Meta<typeof SelectList> = {
  title: "Components/Dropdown/SelectList",
  component: SelectList,
  argTypes: {
    hideCheckbox: { control: "boolean" },
    onChange: { control: false },
    model: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SelectList>;

export const Base: Story = {
  render: (args: SelectListProps) => {
    const [listModel, setListModel] = useState<(string | number)[]>([]);

    return (
      <div>
        <SelectList
          options={args.options}
          hideCheckbox={args.hideCheckbox}
          model={listModel}
          onChange={(model) => setListModel(model)}
        />
        <div className="my-32 p-8 bg-light">
          Selected options : {listModel.map((item) => item + ", ")}
        </div>
      </div>
    );
  },

  args: {
    options: [
      {
        value: "disable",
        label: "Disable",
        icon: Block,
      },
      {
        value: "audio",
        label: "Enable audio conference",
        icon: Headphone,
      },
      {
        value: "secure_mode",
        label: "Secure mode",
        icon: Lock,
      },
    ],
  },
};

export const MonoSelectListMenu: Story = {
  render: (args: SelectListProps) => (
    <Dropdown
      trigger={<DropdownTrigger icon={<TextSize />} title="" variant="ghost" />}
      content={
        <SelectList
          {...args}
          isMonoSelection
          hideCheckbox
          options={[
            {
              value: "title1",
              label: "Titre 1",
              className: "display-2 fw-bold",
            },
            {
              value: "title2",
              label: "Titre 2",
              className: "display-3 fw-bold",
            },
            {
              value: "big",
              label: "Texte grand",
              className: "display-4 fw-normal",
            },
            {
              value: "std",
              label: "Texte normal",
            },
            {
              value: "small",
              label: "Texte petit",
              className: "small",
            },
          ]}
        />
      }
    />
  ),
  decorators: [(Story) => <div style={{ height: "600px" }}>{Story()}</div>],
  parameters: {
    docs: {
      description: {
        story: `Exemple de mono-sélection avec style CSS, embarqué dans un DropDown.`,
      },
    },
  },
};
