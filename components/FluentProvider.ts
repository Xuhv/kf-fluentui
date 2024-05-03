import { teamsLightTheme, type Theme } from "@kf/fluentui-tokens"
import type { JSX } from "preact"
import { createElement } from "preact"

function generateStyle(theme: Theme): string {
  return `:root {${Object.entries(theme)
    .map(([key, value]) => {
      return `--${key}: ${value};`
    })
    .join("")}}${registry.join("\n")}`
}

export const registry: string[] = []

export function FluentProvider({ theme = teamsLightTheme }: { theme?: Theme }): JSX.Element {
  return createElement("style", { dangerouslySetInnerHTML: { __html: generateStyle(theme) } })
}
