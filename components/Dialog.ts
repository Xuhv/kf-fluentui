import type { ComponentChildren, JSX, Ref } from "preact"
import { createContext } from "preact"
import { forwardRef } from "preact/compat"
import { useEffect, useRef, useState, useContext } from "preact/hooks"
import { mergeRefs, mergeClasses, IS_BROWSER } from "./utils.ts"
import { registry } from "./FluentProvider.ts"
import { createElement } from "preact"
import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/x.tsx"
import { Button } from "./Button.ts"

if (!IS_BROWSER) {
  const styles = await Deno.readTextFile(import.meta.resolve("./css/dialog.css").substring(7))

  registry.push(styles)
}

type DialogContextState = {
  nonModal: boolean
  onOpenChange?: (open: boolean) => void
  hasAction: boolean
  setHasAction: (hasAction: boolean) => void
}

const DialogContext = createContext<DialogContextState>({
  nonModal: false,
  onOpenChange: undefined,
  hasAction: false,
  setHasAction: () => {}
})

type DialogProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "open" | "className" | "class"> & {
  open: boolean
  modalType?: "modal" | "non-modal" | "dialog"
  onOpenChange?: (open: boolean) => void
  className?: string
}

export const Dialog = forwardRef(function Dialog(
  { modalType = "modal", ...props }: DialogProps,
  ref: Ref<HTMLDivElement>
): JSX.Element | null {
  const [dialogRef, setDialogRef] = useState<HTMLDivElement | null>(null)
  const _ref = mergeRefs(setDialogRef, ref)
  const [hasAction, setHasAction] = useState(false)

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

  const render = () =>
    createElement(
      "div",
      { ...props, _ref, class: mergeClasses("dialog", props) },
      createElement(
        DialogContext.Provider,
        {
          value: {
            nonModal: modalType === "non-modal",
            onOpenChange: props.onOpenChange,
            hasAction,
            setHasAction
          }
        },
        props.children
      )
    )

  if (modalType === "non-modal") {
    return props.open ? render() : null
  }

  return createElement(Backdrop, {
    open: props.open,
    onCancel: () => {
      modalType === "modal" && props.onOpenChange?.(false)
    },
    children: props.open ? render() : null
  })
})

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

type DialogTitleProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "className" | "class"> & {
  className?: string
  children?: ComponentChildren
}

/**
 * A Dialog with modalType='non-modal' will have a close button action.
 * @returns
 */
export const DialogTitle = forwardRef(function DialogTitle(
  { children, className, ...props }: DialogTitleProps,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const { nonModal, onOpenChange, hasAction } = useContext<DialogContextState>(DialogContext)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (nonModal && !hasAction) {
      console.log(buttonRef.current)

      // buttonRef.current?.focus()
    }
  }, [nonModal, hasAction])

  return createElement("div", { ...props, className: `dialog-title ${className}`, ref }, [
    children ?? "",
    nonModal &&
      createElement(Button, {
        ref: buttonRef,
        className: "dialog-dismiss",
        appearance: "subtle",
        onClick: () => onOpenChange?.(false),
        icon: createElement(IconX, { className: "icon" })
      })
  ])
})

type DialogActionsProps = DialogTitleProps

export const DialogActions = forwardRef(function DialogActions(
  { className, children, ...props }: DialogActionsProps,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const { setHasAction } = useContext<DialogContextState>(DialogContext)
  const actionsRef = useRef<HTMLDivElement>(null)
  const _ref = mergeRefs(actionsRef, ref)

  useEffect(() => {
    setHasAction(true)
    ;(actionsRef.current?.querySelector("input, button, textarea") as HTMLInputElement)?.focus()
  }, [setHasAction])

  return createElement("div", { ...props, className: `dialog-actions ${className}`, ref: _ref }, children)
})
