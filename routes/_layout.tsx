import type { PageProps } from "$fresh/server.ts";
import { Divider } from "@/components/Divider.tsx";
import { Surface } from "@/components/Surface.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <Surface className="h-screen grid grid-cols-[auto_auto_1fr]">
      <ul className="w-56 px-2">
        <li class="py-2">
          <a href="/">Home</a>
        </li>

        <Divider />

        <li>
          <a href="/components/Button">Button</a>
        </li>
        <li>
          <a href="/components/Divider">Divider</a>
        </li>
        <li>
          <a href="/components/Dialog">Dialog</a>
        </li>
        <li>
          <a href="/components/Input">Input, Label, Textarea</a>
        </li>
        <li>
          <a href="/components/Surface">Surface</a>
        </li>
      </ul>

      <Divider vertical />
      <div className="x">
        <Component />
      </div>
    </Surface>
  );
}
