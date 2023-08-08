import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/ts/index.ts"),
      name: "edifice-ts-client",
      // the proper extensions will be added
      fileName: "index",
      formats: ["cjs", "es"],
    },
  },
  plugins: [dts()],
});
