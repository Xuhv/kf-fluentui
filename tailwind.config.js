import { tokens } from "@kf/fluentui-tokens";

const colors = Object.fromEntries(
  Object.entries(tokens)
    .filter(([k, _]) => k.startsWith("color"))
    .map(([k, v]) => [k.replace("color", ""), v]),
);

const spacing = Object.fromEntries(
  Object.entries(tokens)
    .filter(([k, _]) => k.startsWith("spacing"))
    .map(([k, v]) => [k.replace("spacing", ""), v]),
);

const borderRadius = Object.fromEntries(
  Object.entries(tokens)
    .filter(([k, _]) => k.startsWith("borderRadius"))
    .map(([k, v]) => [k.replace("borderRadius", ""), v]),
);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: { spacing },
  },
  colors,
  borderRadius,
};
