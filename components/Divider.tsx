import type { ComponentChildren, FunctionComponent, Ref } from "preact";
import { forwardRef } from "preact/compat";
import { mergeClasses } from "./utils.ts";
import type { JSX } from "preact";
import styles from "./Divider.styles.ts";

type DividerProps =
  & Omit<JSX.HTMLAttributes<HTMLDivElement>, "className" | "class">
  & {
    appearance?: "strong" | "brand" | "subtle" | "default";
    alignContent?: "center" | "start" | "end";
    children?: ComponentChildren;
    vertical?: boolean;
    inset?: boolean;

    className?: string;
  };

export const Divider: FunctionComponent<DividerProps> = forwardRef(
  function Divider(
    {
      appearance = "default",
      alignContent = "center",
      children,
      vertical,
      inset,
      ...props
    }: DividerProps,
    ref: Ref<HTMLDivElement>,
  ): JSX.Element {
    return (
      <div
        {...props}
        ref={ref}
        class={mergeClasses(
          styles.Divider,
          // @ts-expect-error
          styles[appearance],
          {
            [styles.vertical]: vertical,
            [styles.inset]: inset,
            [styles.hasContent]: children,
          },
          // @ts-expect-error
          styles[alignContent],
          props.className,
        )}
      >
        {children}
      </div>
    );
  },
);
