import { ForwardedRef, forwardRef, FunctionComponent, isValidElement, JSX } from "preact/compat";
import { mergeClasses } from "./utils.ts";
import { Label, LabelProps } from "./Label.tsx";
import styles from "./Field.styles.ts";
import { CheckmarkCircleFilled } from "@kf/preact-icons/icons/CheckmarkCircle.ts";
import { ErrorCircleFilled } from "@kf/preact-icons/icons/ErrorCircle.ts";
import { WarningFilled } from "@kf/preact-icons/icons/Warning.ts";

const ICONS = {
  "success": <CheckmarkCircleFilled size={12} />,
  "error": <ErrorCircleFilled size={12} />,
  "warning": <WarningFilled size={12} />,
  "none": null,
};

interface FieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "class" | "label"> {
  className?: string;
  label?: LabelProps | JSX.Element | string;
  /**
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
  validationMassage?: string | JSX.Element;
  validationState?: "success" | "error" | "warning" | "none";
  validationIcon?: JSX.Element;
}

export const Field: FunctionComponent<FieldProps> = forwardRef(
  function Field(
    {
      className,
      label,
      orientation = "vertical",
      children,
      validationState = "none",
      validationIcon,
      validationMassage,
      ...props
    }: FieldProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <div
        {...props}
        ref={ref}
        class={mergeClasses(styles.Field, styles[orientation], className)}
      >
        {/* @ts-expect-error */}
        {label ? isValidElement(label) || typeof label === "string" ? label : <Label {...label} /> : null}
        <div class={styles.Container}>
          {children}
          {/* @ts-expect-error */}
          <div class={mergeClasses(styles.Message, styles[validationMassage ? "error" : validationState])}>
            <span class={styles.Icon}>
              {validationIcon ?? validationMassage ? ICONS.error : ICONS[validationState]}
            </span>
            {validationMassage}
          </div>
        </div>
      </div>
    );
  },
);
