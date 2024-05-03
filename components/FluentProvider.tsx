import { teamsLightTheme, type Theme } from "@fluentui/react-theme"
import type { JSX } from "preact"

function generateStyle(theme: Theme): string {
  return `:root {${Object.entries(theme)
    .map(([key, value]) => {
      return `--${key}: ${value};`
    })
    .join("")}}${registry.join("\n")}`
}

export const registry: string[] = []

export function FluentProvider({ theme = teamsLightTheme }: { theme?: Theme }): JSX.Element {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <style dangerouslySetInnerHTML={{ __html: generateStyle(theme) }} />
}
