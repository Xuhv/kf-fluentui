import { useState } from "preact/hooks"
import { Dialog, DialogTitle } from "../components/Dialog.tsx"
import { Button } from "../components/Button.tsx"
import { DialogActions } from "../components/Dialog.tsx"

export function DialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h2 class="text-3xl">Dialog</h2>

        <div className="my-3">
          <a target="_blank" rel="noreferrer" href="https://github.com/Xuhv/kf-fluentui/blob/main/routes/components/Dialog.tsx">
            source
          </a>
        </div>

        <Button appearance="primary" onClick={() => setOpen(true)}>
          Open
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen} modalType="non-modal">
        <DialogTitle>
          <h3 className="text-2xl">Title</h3>
        </DialogTitle>
        <div className="h-[500px] flex flex-col">
          <p>When dialog open, the first focusable element like button will be focused</p>
          <div className="flex-grow" />
        </div>
        <DialogActions>
          <Button onClick={() => {
            setOpen(false)
            alert("close")
          }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
