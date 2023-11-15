import { Meta, StoryObj } from "@storybook/react";

import ExternalLinker from "./ExternalLinker";
import { useState } from "react";

const meta: Meta<typeof ExternalLinker> = {
  title: "Multimedia/ExternalLinker",
  component: ExternalLinker,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ExternalLinker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Base: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export const Validation: Story = {
  render: (args) => {
    const [isValidURL, setIsValidURL] = useState(false);

    const handleLinkChange = ({}, isValidURL: boolean) => {
      setIsValidURL(isValidURL);
    };

    return (
      <>
        <ExternalLinker onChange={handleLinkChange} />
        <div className="mt-32">
          {isValidURL ? "URL is valid" : "URL is INVALID"}
        </div>
      </>
    );
  },
};

export const UpdateLink: Story = {
  args: {
    link: {
      url: "www.edifice.io",
      text: "Lien vers Edifice",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export const SelectedText: Story = {
  args: {
    text: "Text sélectionné",
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
