// deno-lint-ignore-file ban-ts-comment
import type { JSX, Ref, FunctionalComponent } from "preact"
import { createElement } from "preact"
import { forwardRef } from "preact/compat"
import { mergeClasses } from "./utils.ts"
import styles from "./button.styles.ts"

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
export const Button: FunctionalComponent<ButtonProps> = forwardRef(function Button(
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
        styles.Button,
        // @ts-expect-error
        styles[appearance],
        // @ts-expect-error
        styles[size],
        // @ts-expect-error
        styles[shape],
        children && icon ? styles.withIcon : !children && icon ? styles.iconOnly : "",
        className
      ),
      "aria-disabled": disabledFocusable,
      onClick: disabledFocusable ? undefined : onClick
    },
    content
  )
})
