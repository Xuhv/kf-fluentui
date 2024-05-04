// deno-lint-ignore-file ban-ts-comment
import type { ComponentChildren } from "preact"
import { mergeClasses } from "./utils.ts"
import type { JSX } from "preact"
import { createElement } from "preact"
import styles from "./divider.styles.ts"

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
        styles.Divider,
        // @ts-expect-error
        styles[appearance],
        props.vertical ? styles.vertical : "",
        props.inset ? styles.inset : "",
        props.children ? styles.hasContent : "",
        // @ts-expect-error
        styles[alignContent]
      )
    },
    props.children
  )
}
