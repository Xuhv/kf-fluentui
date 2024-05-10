import { defineConfig } from "$fresh/server.ts"
import tailwind from "$fresh/plugins/tailwind.ts"
import { cssModules } from "https://deno.land/x/kf_fresh_plugins@v1.0.0-beta.2/plugins/cssModules.ts";
import { resolve } from "$std/path/mod.ts"

export default defineConfig({
  plugins: [
    cssModules({
      watchDir: resolve("./components"),
      cssOutFile: resolve("./static/fui.css"),
      tsOutDir: resolve("./components")
    }),
    tailwind()
  ]
})
