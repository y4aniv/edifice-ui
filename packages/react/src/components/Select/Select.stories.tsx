import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import Select, { OptionsType } from "./Select";
import { ListOrder } from "@edifice-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  decorators: [(Story) => <div style={{ height: "400px" }}>{Story()}</div>],
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const subjectAreaOptions: OptionsType[] = [
  { value: "artActivity", label: "Activités artistiques" },
  { value: "readLearning", label: "Apprentissage de la lecture" },
  { value: "chemistry", label: "Chimie" },
  { value: "law", label: "Droit" },
  { value: "worldDiscovery", label: "Découverte du monde" },
  { value: "economy", label: "Economie" },
  { value: "mediaEducation", label: "Education aux médias" },
  { value: "musicEducation", label: "Education musicale" },
  { value: "sportEducation", label: "Education physique et sportive" },
  { value: "citizenshipEducation", label: "Enseignement civique" },
  { value: "geography", label: "Géographie" },
  { value: "history", label: "Histoire" },
  { value: "artHistory", label: "Histoire des arts" },
  { value: "ComputerScience", label: "Informatique" },
  { value: "languages", label: "Langues" },
  { value: "ancientLanguages", label: "Langues anciennes" },
  { value: "literature", label: "Littérature" },
  { value: "mathematics", label: "Mathématiques" },
  { value: "vocationalGuidance", label: "Orientation" },
  { value: "philosohppy", label: "Philosophie" },
  { value: "physics", label: "Physique" },
  { value: "politicalSscience", label: "Sciences politiques" },
  { value: "sociology", label: "Sociologie" },
  { value: "biology", label: "SVT - Biologie" },
  { value: "geology", label: "SVT - Géologie" },
  { value: "technology", label: "Technologie" },
  { value: "german", label: "Allemand" },
  { value: "english", label: "Anglais" },
  { value: "arabian", label: "Arabe" },
  { value: "spanish", label: "Espagnol" },
  { value: "french", label: "Français" },
  { value: "frensh", label: "Français" },
  { value: "italian", label: "Italien" },
  { value: "japanese", label: "Japonais" },
  { value: "mandarinChinese", label: "Mandarin" },
  { value: "portuguese", label: "Portuguais" },
  { value: "russian", label: "Russe" },
];

export const Base: Story = {
  render: (args) => {
    const onChange = (option: OptionsType) => {
      console.log(option);
    };

    return <Select onValueChange={onChange} options={subjectAreaOptions} />;
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const onChange = (option: OptionsType) => {
      console.log(option);
    };

    return (
      <Select
        icon={<ListOrder />}
        onValueChange={onChange}
        options={subjectAreaOptions}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const onChange = (option: OptionsType) => {
      console.log(option);
    };

    return (
      <Select onValueChange={onChange} options={subjectAreaOptions} disabled />
    );
  },
};

export const Variant: Story = {
  render: (args) => {
    const onChange = (option: OptionsType) => {
      console.log(option);
    };

    return (
      <Select
        onValueChange={onChange}
        options={subjectAreaOptions}
        variant="ghost"
      />
    );
  },
};

export const SelectSizes: Story = {
  render: (args) => {
    const onChange = (option: OptionsType) => {
      console.log(option);
    };

    return (
      <>
        <div className="d-flex align-items-center gap-8">
          <Select
            onValueChange={onChange}
            options={subjectAreaOptions}
            size="sm"
          />
          <Select
            onValueChange={onChange}
            options={subjectAreaOptions}
            size="md"
          />
          <Select
            onValueChange={onChange}
            options={subjectAreaOptions}
            size="lg"
          />
        </div>
        <div className="d-flex align-items-center gap-8">
          <Select
            onValueChange={onChange}
            options={subjectAreaOptions}
            size="sm"
            variant="ghost"
          />
          <Select
            onValueChange={onChange}
            options={subjectAreaOptions}
            size="md"
            variant="ghost"
          />
          <Select
            onValueChange={onChange}
            options={subjectAreaOptions}
            size="lg"
            variant="ghost"
          />
        </div>
      </>
    );
  },
};
