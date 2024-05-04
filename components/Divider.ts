import type { ComponentChildren } from "preact"
import { IS_BROWSER, mergeClasses } from "./utils.ts"
import { registry } from "./FluentProvider.ts"
import type { JSX } from "preact"
import { createElement } from "preact"

if (!IS_BROWSER) {
  const styles = await fetch(import.meta.resolve("./css/divider.css")).then(res => res.text())

  registry.push(styles)
}

type DividerProps = {
  appearance?: "strong" | "brand" | "subtle" | "default"
  alignContent?: "center" | "start" | "end"
  children?: ComponentChildren
  vertical?: boolean
  inset?: boolean
}

export function Divider({ appearance = "default", alignContent = "center", ...props }: DividerProps): JSX.Element {
  return createElement(
    "div",
    {
      ...props,
      class: mergeClasses(
        "divider",
        appearance,
        props.vertical ? "vertical" : "",
        props.inset ? "inset" : "",
        props.children ? "hasContent" : "",
        alignContent
      )
    },
    props.children
  )
}
