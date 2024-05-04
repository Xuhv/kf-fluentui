import { defineConfig } from "$fresh/server.ts"
import tailwind from "$fresh/plugins/tailwind.ts"
import { cssModules } from "https://github.com/Xuhv/kf-fresh-plugins/raw/main/plugins/cssModules.ts"
import { resolve } from "$std/path/mod.ts"

export default defineConfig({
  plugins: [
    cssModules({
      watchDir: resolve("./css"),
      cssOutFile: resolve("./static/fui.css"),
      tsOutDir: resolve("./components")
    }),
    tailwind()
  ]
})
