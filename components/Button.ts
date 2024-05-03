import type { JSX, Ref } from "preact"
import { createElement } from "preact"
import { forwardRef } from "preact/compat"
import { IS_BROWSER, mergeClasses } from "./utils.ts"
import { registry } from "./FluentProvider.ts"

if (!IS_BROWSER) {
  const styles = await Deno.readTextFile(import.meta.resolve("./css/button.css").substring(7))

  registry.push(styles)
}

type ButtonProps = Omit<JSX.HTMLAttributes<HTMLButtonElement>, "size" | "class" | "className" | "icon"> & {
  appearance?: "primary" | "secondary" | "outline" | "subtle" | "transparent"
  size?: "small" | "medium" | "large"
  icon?: JSX.Element
  iconPosition?: "before" | "after"
  shape?: "square" | "rounded" | "circle"
  as?: "a" | "button"
  disabledFocusable?: boolean

  className?: string
}

/**
 * @see https://react.fluentui.dev/?path=/docs/components-button-button--default
 * @returns
 */
export const Button = forwardRef(function Button(
  {
    appearance = "secondary",
    size = "medium",
    shape = "rounded",
    as = "button",
    iconPosition = "before",
    icon,
    disabledFocusable,
    children,
    onClick,
    className,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
): JSX.Element {
  const content = iconPosition === "before" ? [icon, children] : [children, icon]

  return createElement(
    as,
    {
      ...props,
      ref,
      className: mergeClasses(
        "button",
        appearance,
        size,
        shape,
        children && icon ? "withIcon" : !children && icon ? "iconOnly" : "",
        className
      ),
      "aria-disabled": disabledFocusable,
      onClick: disabledFocusable ? undefined : onClick
    },
    content
  )
})
