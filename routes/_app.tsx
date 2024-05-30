import type { FreshContext } from "$fresh/server.ts"
import { tokens } from "@kf/fluentui-tokens";

export default async function App({ headers }: Request, { Component }: FreshContext) {
  const theme = headers.get("x-theme") ?? "teamsDark"

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>kf-ui</title>
        <link rel="stylesheet" href="/fui.css" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href={`/${theme}.css`} />
      </head>
      <body style={{ backgroundColor: tokens.colorNeutralBackground1 }}>
        <Component />
      </body>
    </html>
  )
}
