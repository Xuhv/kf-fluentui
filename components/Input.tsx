import { FunctionComponent, JSX, Ref } from "preact";
import { forwardRef } from "preact/compat";
import styles from "./Input.styles.ts";
import { mergeClasses } from "./utils.ts";

export interface InputProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, "size" | "className" | "class"> {
  size?: "small" | "medium" | "large";
  className?: string;
  contentBefore?: JSX.Element;
  contentAfter?: JSX.Element;
  appearance?: "underline" | "outline";
  containerClassName?: string;
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
      className,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) {
    return (
      <span
        //  @ts-expect-error
        class={mergeClasses(styles.Input, styles[size], styles[appearance], {
          [styles.disabled]: props.disabled,
        }, props.containerClassName)}
      >
        {contentBefore}
        <input
          {...props}
          ref={ref}
          class={mergeClasses(styles.Control, className)}
        />
        {contentAfter}
      </span>
    );
  },
);

export { styles as inputStyles }
