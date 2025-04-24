import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineContentCopy } from "react-icons/md";

function ViewHTMLDialog({ openDialog, htmlCode, closeDialog }) {
  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <div className="mb-2 mt-4 flex justify-between items-center">
              <h2>HTML Email Template Code</h2>
              <button className="flex items-center gap-1 text-sm hover:bg-violet-600 p-2 border-2 bg-slate-100 border-violet-600 hover:text-slate-50 text-violet-600 rounded-sm cursor-pointer md:pl-5 md:pr-5">
                <MdOutlineContentCopy className="h-4 w-4" />
                Copy
              </button>
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="max-h-[500px] overflow-auto bg-slate-950 text-slate-300 rounded-lg p-5">
              <pre className="whitespace-pre-wrap break-all">
                <code> {htmlCode}</code>
              </pre>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ViewHTMLDialog;
