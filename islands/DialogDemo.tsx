import { useState } from "preact/hooks"
import { Dialog } from "../components/Dialog.tsx"
import { Button } from "../components/Button.tsx"

export function DialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h2 class="text-3xl mb-3">Dialog</h2>
        <Button appearance="primary" onClick={() => setOpen(true)}>
          Open
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="h-[500px] flex flex-col">
          <h3 className="text-2xl">Title</h3>
          <p>When dialog open, the first focusable element like button will be focused</p>
          <div className="flex-grow" />
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Dialog>
    </div>
  )
}
