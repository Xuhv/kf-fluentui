import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { resolve } from "$std/path/mod.ts";

const IS_DENO_DEPLOY = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;

const plugins = [tailwind()];

if (!IS_DENO_DEPLOY) {
  const cssModules =
    (await import("https://deno.land/x/kf_fresh_plugins@v1.0.0-beta.3/plugins/cssModules.ts")).cssModules;
  plugins.unshift(cssModules({
    watchDir: resolve("./components"),
    cssOutFile: resolve("./static/fui.css"),
    tsOutDir: resolve("./components"),
  }));
}

export default defineConfig({ plugins });
