import type { ComponentChildren, FunctionalComponent, JSX, Ref } from "preact";
import { createContext } from "preact";
import { forwardRef } from "preact/compat";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { mergeClasses, mergeRefs } from "./utils.ts";
import { Button } from "./Button.tsx";
import styles from "./Dialog.styles.ts";
import { DismissRegular } from "@kf/preact-icons";

type DialogContextState = {
  nonModal: boolean;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  hasAction: boolean;
  setHasAction: (hasAction: boolean) => void;
};

const DialogContext = createContext<DialogContextState>({
  nonModal: false,
  open: false,
  onOpenChange: undefined,
  hasAction: false,
  setHasAction: () => {},
});

type DialogProps =
  & Omit<JSX.HTMLAttributes<HTMLDivElement>, "open" | "className" | "class">
  & {
    open: boolean;
    modalType?: "modal" | "non-modal" | "dialog";
    onOpenChange?: (open: boolean) => void;
    className?: string;
  };

export const Dialog: FunctionalComponent<DialogProps> = forwardRef(
  function Dialog(
    { modalType = "modal", ...props }: DialogProps,
    ref: Ref<HTMLDivElement>,
  ): JSX.Element | null {
    const [dialogRef, setDialogRef] = useState<HTMLDivElement | null>(null);
    const _ref = mergeRefs(setDialogRef, ref);
    const [hasAction, setHasAction] = useState(false);
    const initRef = useRef(false);

    useEffect(() => {
      const h = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          props.onOpenChange?.(false);
        }
      };
      document.addEventListener("keydown", h);
      return () => document.removeEventListener("keydown", h);
    }, [props.onOpenChange]);

    useEffect(() => {
      if (!initRef.current) return;
      const el = dialogRef?.querySelector("input, button, textarea") as
        | HTMLInputElement
        | undefined;
      el?.focus();
    }, [dialogRef]);

    const render = () => (
      <div {...props} ref={_ref} class={mergeClasses(styles.Dialog, props.className)}>
        <DialogContext.Provider
          value={{
            nonModal: modalType === "non-modal",
            open: props.open,
            onOpenChange: props.onOpenChange,
            hasAction,
            setHasAction,
          }}
        >
          {props.children}
        </DialogContext.Provider>
      </div>
    );

    if (modalType === "non-modal") {
      return props.open ? render() : null;
    }

    return (
      <Backdrop open={props.open} onCancel={() => modalType === "modal" && props.onOpenChange?.(false)}>
        {props.open ? render() : null}
      </Backdrop>
    );
  },
);

function Backdrop(props: {
  onCancel: () => void;
  children: ComponentChildren;
  open: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onClick={(e) => e.target === ref.current && props.onCancel()}
      className={mergeClasses(styles.Backdrop, props.open ? styles.open : undefined)}
    >
      {props.children}
    </div>
  );
}

type DialogTitleProps =
  & Omit<JSX.HTMLAttributes<HTMLDivElement>, "className" | "class">
  & {
    className?: string;
    children?: ComponentChildren;
  };

/**
 * A Dialog with modalType='non-modal' will have a close button action.
 * @returns
 */
export const DialogTitle: FunctionalComponent<DialogTitleProps> = forwardRef(
  function DialogTitle(
    { children, className, ...props }: DialogTitleProps,
    ref: Ref<HTMLDivElement>,
  ): JSX.Element {
    const { nonModal, onOpenChange } = useContext<
      DialogContextState
    >(DialogContext);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <div {...props} ref={ref} className={mergeClasses(styles.DialogTitle, className)}>
        {children ?? ""}
        {nonModal &&
          (
            <Button
              ref={buttonRef}
              icon={<DismissRegular width={24} height={24} className="Icon" />}
              appearance="subtle"
              onClick={() => onOpenChange?.(false)}
              className={styles.DialogDismiss}
            />
          )}
      </div>
    );
  },
);

type DialogActionsProps = DialogTitleProps;

export const DialogActions: FunctionalComponent<DialogActionsProps> = forwardRef(function DialogActions(
  { className, children, ...props }: DialogActionsProps,
  ref: Ref<HTMLDivElement>,
): JSX.Element {
  const { setHasAction, hasAction, open } = useContext<DialogContextState>(DialogContext);
  const actionsRef = useRef<HTMLDivElement>(null);
  const _ref = mergeRefs(actionsRef, ref);

  useEffect(() => {
    if (!hasAction) setHasAction(true);
    (actionsRef.current?.querySelector(
      "input, button, textarea",
    ) as HTMLInputElement)?.focus();
  }, [setHasAction, hasAction, open]);

  return <div {...props} ref={_ref} className={mergeClasses(styles.DialogActions, className)}>{children}</div>;
});

export { styles as dialogStyles }
