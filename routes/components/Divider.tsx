import { Divider } from "../../components/Divider.tsx"

export default function DividerSamples() {
  return (
    <div className="grid gap-4">
      <h2 class="text-3xl">Divider</h2>

      <a target="_blank" rel="noreferrer" href="https://github.com/Xuhv/kf-fluentui/blob/main/routes/components/Divider.tsx">source</a>

      <div className="grid grid-cols-2 w-fit gap-4">
        <div className="grid gap-2">
          <h3 class="text-xl">appearance</h3>
          <div className="flex flex-col gap-5 w-96 border py-2">
            <Divider />
            <Divider appearance="subtle" />
            <Divider appearance="brand" />
            <Divider appearance="strong" />
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-xl">inset</h3>
          <div className="flex flex-col gap-5 w-96 border py-2">
            <Divider inset />
            <Divider inset appearance="subtle" />
            <Divider inset appearance="brand" />
            <Divider inset appearance="strong" />
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-xl">with children</h3>
          <div className="flex flex-col gap-5 w-96 border py-2">
            <Divider>content</Divider>
            <Divider appearance="subtle">content</Divider>
            <Divider appearance="brand">content</Divider>
            <Divider appearance="strong">content</Divider>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-xl">align</h3>
          <div className="flex flex-col gap-5 w-96 border py-2">
            <Divider alignContent="start">content</Divider>
            <Divider alignContent="center" appearance="subtle">
              content
            </Divider>
            <Divider alignContent="end" appearance="brand">
              content
            </Divider>
            <Divider alignContent="end" appearance="strong">
              content
            </Divider>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-xl">align and inset</h3>
          <div className="flex flex-col gap-5 w-96 border py-2">
            <Divider inset alignContent="start">
              content
            </Divider>
            <Divider inset alignContent="center" appearance="subtle">
              content
            </Divider>
            <Divider inset alignContent="end" appearance="brand">
              content
            </Divider>
            <Divider inset alignContent="end" appearance="strong">
              content
            </Divider>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-xl">vertical</h3>
          <div className="flex gap-5 h-96 border px-2">
            <Divider vertical>content</Divider>
            <Divider vertical appearance="subtle">
              content
            </Divider>
            <Divider vertical appearance="brand">
              content
            </Divider>
            <Divider vertical appearance="strong">
              content
            </Divider>
          </div>
        </div>
      </div>
    </div>
  )
}
