import { cssModules } from "https://deno.land/x/kf_fresh_plugins@v1.0.0-beta.3/plugins/cssModules.ts";
import { resolve } from "$std/path/mod.ts";

const plugin = cssModules({
  watchDir: resolve("./components"),
  cssOutFile: resolve("./static/fui.css"),
  tsOutDir: resolve("./components"),
});

await plugin.produceModules();
Deno.exit();
