// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $components_Button from "./routes/components/Button.tsx";
import * as $components_Dialog from "./routes/components/Dialog.tsx";
import * as $components_Divider from "./routes/components/Divider.tsx";
import * as $index from "./routes/index.tsx";
import * as $DialogDemo from "./islands/DialogDemo.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/components/Button.tsx": $components_Button,
    "./routes/components/Dialog.tsx": $components_Dialog,
    "./routes/components/Divider.tsx": $components_Divider,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/DialogDemo.tsx": $DialogDemo,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
