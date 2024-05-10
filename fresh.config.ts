import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { resolve } from "$std/path/mod.ts";

const IS_DENO_DEPLOY = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;

const plugins = [tailwind()];

if (!IS_DENO_DEPLOY) {
  const cssModules = (await import("./buildModules.ts"))
  plugins.unshift(cssModules as any);
}

export default defineConfig({ plugins });
