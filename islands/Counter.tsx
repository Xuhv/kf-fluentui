import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import IconPlus from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/plus.tsx";
import IconMinus from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/minus.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button icon={<IconMinus />} onClick={() => props.count.value -= 1} />
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button icon={<IconPlus />} onClick={() => props.count.value += 1} />
    </div>
  );
}
