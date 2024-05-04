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

export function getClassName<T extends Record<string, string>>(styles: T, k: keyof T | string): string | undefined {
  return styles[k]
}

export function mergeClasses(...classes: (string | undefined | { [k in "className" | "class"]?: string | undefined })[]): string {
  return classes
    .map(x => (typeof x === "object" ? x.class ?? x.className : x))
    .filter(Boolean)
    .join(" ")
}

export const IS_BROWSER = typeof document !== "undefined"
