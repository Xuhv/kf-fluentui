import type { ComponentChildren, JSX } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { mergeRefs, mergeClasses, IS_BROWSER } from "./utils.ts"
import { registry } from "./FluentProvider.ts"
import { createElement } from "preact"

if (!IS_BROWSER) {
  const styles = await Deno.readTextFile(import.meta.resolve("./css/dialog.css").substring(7))

  registry.push(styles)
}

type DialogProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "open" | "className" | "class"> & {
  open: boolean
  modalType?: "modal" | "non-modal" | "dialog"
  onOpenChange?: (open: boolean) => void
  className?: string
}

export function Dialog({ modalType = "modal", ...props }: DialogProps): JSX.Element | null {
  const [dialogRef, setDialogRef] = useState<HTMLDivElement | null>(null)
  const ref = mergeRefs(setDialogRef, props.ref)

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onOpenChange?.(false)
      }
    }
    document.addEventListener("keydown", h)
    return () => document.removeEventListener("keydown", h)
  }, [props.onOpenChange])

  useEffect(() => {
    const el = dialogRef?.querySelector("input, button, textarea") as HTMLInputElement | undefined
    el?.focus()
  }, [dialogRef])

  if (modalType === "non-modal") {
    return props.open ? createElement("div", { ...props, ref, class: mergeClasses("dialog", props) }, props.children) : null
  }

  return createElement(Backdrop, {
    open: props.open,
    onCancel: () => {
      modalType === "modal" && props.onOpenChange?.(false)
    },
    children: props.open ? createElement("div", { ...props, ref, class: mergeClasses("dialog", props) }, props.children) : null
  })
}

function Backdrop(props: {
  onCancel: () => void
  children: ComponentChildren
  open: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  return createElement(
    "div",
    {
      ref,
      onClick: e => {
        e.target === ref.current && props.onCancel()
      },
      class: props.open ? "backdrop open" : "backdrop"
    },
    props.children
  )
}
