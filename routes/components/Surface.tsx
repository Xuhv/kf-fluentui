import { Surface } from "@/components/Surface.tsx";
import { Field } from "@/components/Field.tsx";
import { Input } from "@/components/Input.tsx";

export default function SurfaceSamples() {
  return (
    <div className="grid gap-4">
      <h2 class="text-3xl">Surface</h2>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Xuhv/kf-fluentui/blob/main/routes/components/Surface.tsx"
      >
        source
      </a>

      <Surface backgroundLevel={6}>
        level 6
        <Surface backgroundLevel={5}>
          level 5
          <Surface backgroundLevel={4}>
            level 4
            <Surface backgroundLevel={3}>
              level 3
              <Surface backgroundLevel={2}>
                level 2
                <Surface backgroundLevel={1}>
                  level 1
                </Surface>
              </Surface>
            </Surface>
          </Surface>
        </Surface>
      </Surface>

      <Field label={{ required: "***", children: "label" }} validationMassage={"validationMassage"}>
        <Input />
      </Field>
      
      <Field label={{ required: "***", children: "label" }} validationMassage={"validationMassage"} orientation="horizontal">
        <Input />
      </Field>
    </div>
  );
}
