import type { ComponentChildren } from "preact"
import { mergeClasses } from "./utils.ts"
import { registry } from "./FluentProvider.tsx"
import { IS_BROWSER } from "$fresh/runtime.ts"

if (!IS_BROWSER) {
  const styles = await Deno.readTextFile(import.meta.resolve("./css/divider.css").substring(7))

  registry.push(styles)
}

type DividerProps = {
  appearance?: "strong" | "brand" | "subtle" | "default"
  alignContent?: "center" | "start" | "end"
  children?: ComponentChildren
  vertical?: boolean
  inset?: boolean
}

export function Divider({ appearance = "default", alignContent = "center", ...props }: DividerProps) {
  return (
    <div
      className={mergeClasses(
        "divider",
        appearance,
        props.vertical ? "vertical" : "",
        props.inset ? "inset" : "",
        props.children ? "hasContent" : "",
        alignContent
      )}>
      {props.children && <div className="content">{props.children}</div>}
    </div>
  )
}
