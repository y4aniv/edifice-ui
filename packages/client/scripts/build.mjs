import { build } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __dirname = fileURLToPath(new URL("..", import.meta.url));

const config = [
  {
    entry: path.resolve(__dirname, "./src/ts/index.cjs.ts"),
    fileName: () => `ode-ts-client.js`,
    formats: ["umd"],
    name: "ode-ts-client"
  },
  {
    entry: path.resolve(__dirname, "./src/ts/index.ts"),
    formats: ["es"],
  },
];

config.forEach(async (lib) => {
  await build({
    build: {
      target: "es2015",
      minify: "terser",
      outDir: "./dist",
      lib: {
        ...lib,
      },
      commonjsOptions: {
        transformMixedEsModules: true,
        exclude: [
          'node_modules',
        ],
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
    plugins: [
      dts({
        insertTypesEntry: false,
        outputDir: "dist",
      }),
    ],
  });
});
