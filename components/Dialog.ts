import type { ComponentChildren, JSX, Ref, FunctionalComponent } from "preact"
import { createContext } from "preact"
import { forwardRef } from "preact/compat"
import { useEffect, useRef, useState, useContext } from "preact/hooks"
import { mergeRefs, mergeClasses } from "./utils.ts"
import { createElement } from "preact"
import { Button } from "./Button.ts"
import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime"
import styles from "./dialog.styles.ts"

function IconX({ size = 24, color = "currentColor", stroke = 2, ...props }) {
  return /*#__PURE__*/ _jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "Icon icon-tabler icon-tabler-x",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "stroke-width": stroke,
    stroke: color,
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...props,
    children: [
      /*#__PURE__*/ _jsx("path", {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }),
      /*#__PURE__*/ _jsx("path", {
        d: "M18 6l-12 12"
      }),
      /*#__PURE__*/ _jsx("path", {
        d: "M6 6l12 12"
      })
    ]
  })
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

export const Dialog: FunctionalComponent<DialogProps> = forwardRef(function Dialog(
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
      { ...props, _ref, class: mergeClasses(styles.Dialog, props.className) },
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
      className: mergeClasses(styles.Backdrop, props.open ? styles.open : undefined)
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
export const DialogTitle: FunctionalComponent<DialogTitleProps> = forwardRef(function DialogTitle(
  { children, className, ...props }: DialogTitleProps,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const { nonModal, onOpenChange, hasAction } = useContext<DialogContextState>(DialogContext)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (nonModal && !hasAction) {
      buttonRef.current?.focus()
    }
  }, [nonModal, hasAction])

  return createElement("div", { ...props, className: `${styles.DialogTitle} ${className}`, ref }, [
    children ?? "",
    nonModal &&
      createElement(Button, {
        ref: buttonRef,
        className: styles.DialogDismiss,
        appearance: "subtle",
        onClick: () => onOpenChange?.(false),
        icon: createElement(IconX, { className: "Icon" })
      })
  ])
})

type DialogActionsProps = DialogTitleProps

export const DialogActions: FunctionalComponent<DialogActionsProps> = forwardRef(function DialogActions(
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

  return createElement("div", { ...props, className: `${styles.DialogActions} ${className}`, ref: _ref }, children)
})
