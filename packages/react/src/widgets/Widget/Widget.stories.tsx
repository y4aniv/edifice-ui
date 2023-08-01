import { Meta, StoryObj } from "@storybook/react";

import Widget from "./Widget";

export default {
  title: "Widgets/Widget Box",
  component: Widget,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Widget>;

type Story = StoryObj<typeof Widget>;

export const Base: Story = {
  render: (args) => (
    <Widget>
      <Widget.Header>Header</Widget.Header>
      <Widget.Body>Content</Widget.Body>
      <Widget.Footer>Footer</Widget.Footer>
    </Widget>
  ),
};
