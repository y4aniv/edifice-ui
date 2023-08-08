/* import { build } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

// const __dirname = fileURLToPath(new URL("..", import.meta.url));

const config = [
  {
    entry: resolve(__dirname, "./src/ts/index.cjs.ts"),
    fileName: () => `ode-ts-client.js`,
    formats: ["umd"],
    name: "ode-ts-client",
  },
  {
    entry: resolve(__dirname, "./src/ts/index.ts"),
    fileName: () => `ode-ts-client.mjs`,
    formats: ["es"],
  },
];

config.forEach(async (lib) => {
  await build({
    build: {
      sourcemap: true,
      outDir: "./dist",
      lib: {
        ...lib,
      },
      commonjsOptions: {
        transformMixedEsModules: true,
        exclude: ["node_modules"],
      },
      rollupOptions: {
        output: {
          globals: {
            rxjs: "RxJS",
          },
        },
      },
      emptyOutDir: true,
    },
    plugins: [visualizer(), dts()],
  });
});
 */

import { resolve } from "path";
import { defineConfig } from "vite";

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
});
