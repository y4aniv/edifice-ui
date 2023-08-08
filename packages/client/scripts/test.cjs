import { build } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL("..", import.meta.url));

const config = [
  {
    entry: path.resolve(__dirname, "./src/test/Foundation.spec.ts"),
    fileName: (a, b) => `${b}.mjs`,
    formats: ["es"],
  },
];

config.forEach(async (lib) => {
  await build({
    build: {
      target: "es2015",
      minify: false,
      outDir: "./test",
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
  });
});
