import { Button } from "../../components/Button.ts"
import { Input } from "../../components/Input.tsx";
import IconIcons from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/icons.tsx"

export default function ButtonSamples() {
  return (
    <div className="grid gap-4">
      <h2 class="text-3xl">Button</h2>

      <a target="_blank" rel="noreferrer" href="https://github.com/Xuhv/kf-fluentui/blob/main/routes/components/Button.tsx">
        source
      </a>

      <div className="columns-2 w-fit gap-4">
        <div className="grid gap-2">
          <h3 class="text-2xl">appearance</h3>
          <div className="flex gap-5">
            <Button appearance="primary">Primary</Button>
            <Button appearance="secondary">Secondary</Button>
            <Button appearance="outline">Outline</Button>
            <Button appearance="subtle">Subtle</Button>
            <Button appearance="transparent">Transparent</Button>
            <Input  contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
          </div>
        </div>

        <div className="grid gap-2">
          <div class="flex gap-2 items-baseline">
            <h3 class="text-2xl">with icon:</h3>
            <div>you need set gap and icon size by yourself</div>
          </div>
          <div className="flex gap-5">
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} appearance="primary">
              Primary
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} appearance="secondary">
              Secondary
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} appearance="outline">
              Outline
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} appearance="subtle">
              Subtle
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} appearance="transparent">
              Transparent
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">with icon - after</h3>
          <div className="flex gap-5">
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} iconPosition="after" appearance="primary">
              Primary
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} iconPosition="after" appearance="secondary">
              Secondary
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} iconPosition="after" appearance="outline">
              Outline
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} iconPosition="after" appearance="subtle">
              Subtle
            </Button>
            <Button className="gap-1" icon={<IconIcons class="Icon w-4 h-4" />} iconPosition="after" appearance="transparent">
              Transparent
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">icon-only</h3>
          <div className="flex gap-5">
            <Button icon={<IconIcons class="Icon w-4 h-4" />} appearance="primary" />
            <Button icon={<IconIcons class="Icon w-4 h-4" />} appearance="secondary" />
            <Button icon={<IconIcons class="Icon w-4 h-4" />} appearance="outline" />
            <Button icon={<IconIcons class="Icon w-4 h-4" />} appearance="subtle" />
            <Button icon={<IconIcons class="Icon w-4 h-4" />} appearance="transparent" />
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">shape - square</h3>
          <div className="flex gap-5">
            <Button shape="square" appearance="primary">
              Primary
            </Button>
            <Button shape="square" appearance="secondary">
              Secondary
            </Button>
            <Button shape="square" appearance="outline">
              Outline
            </Button>
            <Button shape="square" appearance="subtle">
              Subtle
            </Button>
            <Button shape="square" appearance="transparent">
              Transparent
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">shape - circle</h3>
          <div className="flex gap-5">
            <Button shape="circle" appearance="primary">
              Primary
            </Button>
            <Button shape="circle" appearance="secondary">
              Secondary
            </Button>
            <Button shape="circle" appearance="outline">
              Outline
            </Button>
            <Button shape="circle" appearance="subtle">
              Subtle
            </Button>
            <Button shape="circle" appearance="transparent">
              Transparent
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">disabled</h3>
          <div className="flex gap-5">
            <Button disabled appearance="primary">
              Primary
            </Button>
            <Button disabled appearance="secondary">
              Secondary
            </Button>
            <Button disabled appearance="outline">
              Outline
            </Button>
            <Button disabled appearance="subtle">
              Subtle
            </Button>
            <Button disabled appearance="transparent">
              Transparent
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">disabled but focusable</h3>
          <div className="flex gap-5">
            <Button disabledFocusable appearance="primary">
              Primary
            </Button>
            <Button disabledFocusable appearance="secondary">
              Secondary
            </Button>
            <Button disabledFocusable appearance="outline">
              Outline
            </Button>
            <Button disabledFocusable appearance="subtle">
              Subtle
            </Button>
            <Button disabledFocusable appearance="transparent">
              Transparent
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">size - small</h3>
          <div className="flex gap-5">
            <Button size="small" appearance="primary">
              Primary
            </Button>
            <Button size="small" appearance="secondary">
              Secondary
            </Button>
            <Button size="small" appearance="outline">
              Outline
            </Button>
            <Button size="small" appearance="subtle">
              Subtle
            </Button>
            <Button size="small" appearance="transparent">
              Transparent
            </Button>
            <Input size="small" />
          </div>
        </div>

        <div className="grid gap-2">
          <h3 class="text-2xl">size - large</h3>
          <div className="flex gap-5">
            <Button size="large" appearance="primary">
              Primary
            </Button>
            <Button size="large" appearance="secondary">
              Secondary
            </Button>
            <Button size="large" appearance="outline">
              Outline
            </Button>
            <Button size="large" appearance="subtle">
              Subtle
            </Button>
            <Button size="large" appearance="transparent">
              Transparent
            </Button>
            <Input size="large" />
          </div>
        </div>
      </div>
    </div>
  )
}
