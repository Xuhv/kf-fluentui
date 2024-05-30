import { resolve } from "$std/path/mod.ts";

export default function Home() {
  return (
    <div>
      There are these components now:
      <ul style={{ listStyle: "unset", padding: "20px" }}>
        {Array.from(Deno.readDirSync(resolve("./components"))).filter((x) => x.isFile && x.name.endsWith(".tsx")).map((
          x,
        ) => <li>{x.name}</li>)}
      </ul>
    </div>
  );
}
