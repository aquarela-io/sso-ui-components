import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.rollup.json",
      clean: true,
      exclude: [
        "**/__tests__/**",
        "src/dev/**",
        "**/*.stories.tsx",
        "**/components/**/*.stories.tsx",
      ],
    }),
    postcss({
      plugins: [tailwindcss, autoprefixer],
      extract: false,
      modules: false,
      inject: true,
      minimize: true,
    }),
  ],
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "clsx",
    "tailwind-merge",
    "class-variance-authority",
    "lucide-react",
    "@radix-ui/react-slot",
  ],
};
