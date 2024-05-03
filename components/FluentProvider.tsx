import { teamsLightTheme, type Theme } from "@fluentui/react-theme"

function generateStyle(theme: Theme) {
  return `:root {${Object.entries(theme)
    .map(([key, value]) => {
      return `--${key}: ${value};`
    })
    .join("")}}${registry.join("\n")}`
}

export const registry: string[] = []

export function FluentProvider({ theme = teamsLightTheme }: { theme?: Theme }) {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <style dangerouslySetInnerHTML={{ __html: generateStyle(theme) }} />
}
