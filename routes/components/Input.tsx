import { Input } from "../../components/Input.tsx";
import IconIcons from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/icons.tsx"

export default function ButtonSamples() {
    return (
      <div className="grid gap-4">
        <h2 class="text-3xl">Input</h2>
  
        <a target="_blank" rel="noreferrer" href="https://github.com/Xuhv/kf-fluentui/blob/main/routes/components/Input.tsx">
          source
        </a>
  
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2 w-96">
            <h3 class="text-2xl">size</h3>
            <div className="flex flex-col gap-2">
              <Input placeholder="placeholder" size="small" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
              <Input placeholder="placeholder" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
              <Input placeholder="placeholder" size="large" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-96">
            <h3 class="text-2xl">disabled</h3>
            <div className="flex flex-col gap-2">
              <Input placeholder="placeholder" disabled size="small" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
              <Input placeholder="placeholder" disabled contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
              <Input placeholder="placeholder" disabled size="large" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-96">
            <h3 class="text-2xl">no icons</h3>
            <div className="flex flex-col gap-2">
              <Input placeholder="placeholder" disabled size="small" />
              <Input placeholder="placeholder" disabled />
              <Input placeholder="placeholder" disabled size="large" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-96">
            <h3 class="text-2xl">underline</h3>
            <div className="flex flex-col gap-2">
              <Input appearance="underline" placeholder="placeholder" size="small" />
              <Input appearance="underline" placeholder="placeholder" />
              <Input appearance="underline" placeholder="placeholder" size="large" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-96">
            <h3 class="text-2xl">underline disabled</h3>
            <div className="flex flex-col gap-2">
              <Input appearance="underline" placeholder="placeholder" disabled size="small" />
              <Input appearance="underline" placeholder="placeholder" disabled />
              <Input appearance="underline" placeholder="placeholder" disabled size="large" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 w-96">
            <h3 class="text-2xl">with icon</h3>
            <div className="flex flex-col gap-2">
              <Input appearance="underline" placeholder="placeholder" disabled size="small" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
              <Input appearance="underline" placeholder="placeholder" disabled contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
              <Input appearance="underline" placeholder="placeholder" disabled size="large" contentBefore={<IconIcons class="Icon w-4 h-4" />} contentAfter={<IconIcons class="Icon w-4 h-4" />} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
