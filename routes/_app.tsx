import type { FreshContext } from "$fresh/server.ts"

export default async function App({ url }: Request, { Component }: FreshContext) {
  const theme = new URL(url).searchParams.get("theme") ?? "teamsDark"

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
