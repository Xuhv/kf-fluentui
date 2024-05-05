import type { Ref, RefCallback } from "preact"

export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  return value => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value)
      } else if (ref) {
        ref.current = value
      }
    }
  }
}

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type Booleanish = boolean | undefined | null | {}

export function mergeClasses(...classes: (string | { [k: string]: Booleanish | undefined } | undefined)[]): string {
  return classes
    .map(x =>
      typeof x === "object"
        ? Object.keys(x)
            .filter(k => x[k])
            .join(" ")
        : x
    )
    .filter(Boolean)
    .join(" ")
}
