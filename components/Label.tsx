import { FunctionComponent, JSX, Ref } from "preact";
import { forwardRef } from "preact/compat";
import { mergeClasses } from "./utils.ts";
import styles from "./Label.styles.ts";

export interface LabelProps
  extends Omit<JSX.HTMLAttributes<HTMLLabelElement>, "size" | "className" | "class" | "required"> {
  className?: string;
  required?: boolean | string | JSX.Element;
  weight?: "regular" | "semibord";
}

export const Label: FunctionComponent<LabelProps> = forwardRef(
  function Label({ className, required, weight, ...props }: LabelProps, ref: Ref<HTMLLabelElement>) {
    return (
      // @ts-expect-error
      <label {...props} ref={ref} class={mergeClasses(styles.Label, styles[weight], className)}>
        {props.children}
        {required && <span class={styles.RequiredIndicator}>{typeof required !== "boolean" ? required : "*"}
        </span>}
      </label>
    );
  },
);
