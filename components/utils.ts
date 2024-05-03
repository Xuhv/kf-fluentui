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

export function mergeClasses(...classes: (string | undefined | { [k in "className" | "class"]?: string | undefined })[]) {
  return classes
    .map(x => (typeof x === "object" ? x.class ?? x.className : x))
    .filter(Boolean)
    .join(" ")
}
