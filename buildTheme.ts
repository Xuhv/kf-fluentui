/**
 * You can execute this script to generate preset themes
 * @example
 * // all preset themes will be generated in ./static
 * 
 * deno run -Ar 'jsr:@kf/fluentui/buildTheme'
 * @module
 */

import type { Theme } from "@kf/fluentui-tokens"
import { webLightTheme, webDarkTheme, teamsLightTheme, teamsDarkTheme, teamsHighContrastTheme } from "@kf/fluentui-tokens"

/**
 * export fluent design 2 theme to css
 * @param themes the keys will be used as css file name
 * @param outDir
 */
function extractTheme(themes: { [k: string]: Theme }, outDir: string) {
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

if (import.meta.main) {
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
