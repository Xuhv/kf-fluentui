/**
 * You can execute this script to generate preset themes. All preset themes will be generated in ./static
 * 
 * @example
 * deno run -Ar 'jsr:@kf/fluentui/buildTheme'
 * 
 * @module
 */

import type { Theme } from "@kf/fluentui-tokens"
import { webLightTheme, webDarkTheme, teamsLightTheme, teamsDarkTheme, teamsHighContrastTheme } from "@kf/fluentui-tokens"

/**
 * export fluent design 2 theme to css
 * @param themes the keys will be used as css file name
 * @param outDir
 */
export function extractTheme(themes: { [k: string]: Theme }, outDir: string) {
  Object.entries(themes)
    .map(([k, v]) => [
      k,
      `:root {${Object.entries(v)
        .map(([key, value]) => `--${key}: ${value};`)
        .join("")}}`
    ])
    .forEach(([k, v]) => {
      Deno.writeTextFileSync(`${outDir}/${k}.css`, v)
    })
}

/**
 * Currently, deno can't import css file.
 * @param outDir 
 */
export async function extractComponentsStyles(outDir: string) {
  await fetch(import.meta.resolve("./static/fui.css"))
    .then(r => r.blob())
    .then(b => Deno.writeFile(`${outDir}/fui.css`, b.stream()))
}

if (import.meta.main) {
  if (Deno.args.at(-1)?.startsWith("jsr:"))
    extractTheme(
      {
        webLight: webLightTheme,
        webDark: webDarkTheme,
        teamsLight: teamsLightTheme,
        teamsDark: teamsDarkTheme,
        teamsHighContrast: teamsHighContrastTheme
      },
      "./static"
    )
}
