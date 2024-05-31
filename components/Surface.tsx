import { ForwardedRef, forwardRef, FunctionComponent } from "preact/compat";
import { mergeClasses } from "./utils.ts";
import styles from "./Surface.styles.ts";

interface SurfaceProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "class" | "className"> {
  backgroundLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/**
 * Container div with background color.
 */
export const Surface: FunctionComponent<SurfaceProps> = forwardRef(
  function Surface({ backgroundLevel = 1, className, ...props }: SurfaceProps, ref: ForwardedRef<HTMLDivElement>) {
    return (
      <div
        {...props}
        ref={ref}
        class={mergeClasses(styles.Surface, styles[`level${backgroundLevel}`], className)}
      />
    );
  },
);

export { styles as surfaceStyles }
