import type { Preview } from "@storybook/react";
import { customViewports } from "./viewports";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Design Tokens",
          "Icons",
          "Components",
          "Layouts",
        ],
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
