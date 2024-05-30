import { FunctionComponent, JSX, Ref } from "preact";
import { forwardRef } from "preact/compat";
import styles from "./Input.styles.ts";
import { mergeClasses } from "./utils.ts";

interface InputProps extends Omit<JSX.HTMLAttributes<HTMLTextAreaElement>, "size" | "className" | "class"> {
  className?: string;
  appearance?: "underline" | "outline";
  resize?: "none" | "both" | "horizontal" | "vertical";
}

/**
 * html attributes and ref will be passed to the textarea element instead of the container
 */
export const Textarea: FunctionComponent<InputProps> = forwardRef(
  function Input(
    {
      appearance = "outline",
      resize = "both",
      ...props
    }: InputProps,
    ref: Ref<HTMLTextAreaElement>,
  ) {
    return (
      <span
        //  @ts-expect-error
        class={mergeClasses(styles.Input, styles[appearance], {
          [styles.disabled]: props.disabled,
        })}
      >
        <textarea
          {...props}
          ref={ref}
          class={mergeClasses(styles.Control, styles.TextareaControl, styles[`${resize}Resize`], props.className)}
        />
      </span>
    );
  },
);
