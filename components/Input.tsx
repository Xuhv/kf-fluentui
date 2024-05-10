import { FunctionComponent, JSX, Ref } from "preact";
import { forwardRef } from "preact/compat";
import styles from "./input.styles.ts";
import { mergeClasses } from "./utils.ts";

interface InputProps
  extends
    Omit<JSX.HTMLAttributes<HTMLInputElement>, "size" | "className" | "class"> {
  size?: "small" | "medium" | "large";
  className?: string;
  contentBefore?: JSX.Element;
  contentAfter?: JSX.Element;
  appearance?: "underline" | "outline";
}

/**
 * html attributes and ref will be passed to the input element instead of the container
 */
export const Input: FunctionComponent<InputProps> = forwardRef(
  function Input(
    {
      size = "medium",
      appearance = "outline",
      contentBefore,
      contentAfter,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) {
    return (
      <span
        //  @ts-expect-error
        class={mergeClasses(styles.Input, styles[size], styles[appearance], {
          [styles.disabled]: props.disabled,
        })}
        onFocus={() => console.log("focus")}
      >
        {contentBefore}
        <input
          {...props}
          ref={ref}
          class={mergeClasses(styles.Control, props.className)}
        />
        {contentAfter}
      </span>
    );
  },
);
