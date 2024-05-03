import type { ComponentChildren, JSX } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { mergeRefs, mergeClasses } from "./utils.ts"
import { registry } from "./FluentProvider.tsx"
import { IS_BROWSER } from "$fresh/runtime.ts"

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
    return props.open ? <div ref={ref} {...props} class={mergeClasses("dialog", props)} /> : null
  }

  return (
    <Backdrop
      open={props.open}
      onCancel={() => {
        modalType === "modal" && props.onOpenChange?.(false)
      }}>
      {props.open ? <div ref={ref} {...props} class={mergeClasses("dialog", props)} /> : null}
    </Backdrop>
  )
}

function Backdrop(props: {
  onCancel: () => void
  children: ComponentChildren
  open: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      ref={ref}
      onClick={e => {
        e.target === ref.current && props.onCancel()
      }}
      class={props.open ? "backdrop open" : "backdrop"}>
      {props.children}
    </div>
  )
}
