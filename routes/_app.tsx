import type { FreshContext } from "$fresh/server.ts"

export default async function App({ headers }: Request, { Component }: FreshContext) {
  const theme = headers.get("x-theme") ?? "teamsLight"

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
      <body>
        <Component />
      </body>
    </html>
  )
}
