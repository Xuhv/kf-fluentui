import type { PageProps } from "$fresh/server.ts"
import { Divider } from "../components/Divider.ts"

export default function Layout({ Component }: PageProps) {
  return (
    <div class="h-screen grid grid-cols-[auto_auto_1fr]">
      <ul className="w-56 pl-2">
        <li>
          <a href="/components/Button">Button</a>
        </li>
        <li>
          <a href="/components/Divider">Divider</a>
        </li>
        <li>
          <a href="/components/Dialog">Dialog</a>
        </li>
      </ul>

      <Divider vertical />
      <div className="x">
        <Component />
      </div>
    </div>
  )
}
