import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { MdOutlineCelebration } from "react-icons/md";
function ViewHTMLDialog({ openDialog, htmlCode, closeDialog }) {
  const [copied, setCopied] = useState(false);

  const CopyCode = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <div className="mb-2 mt-4 flex justify-between items-center">
              <h2>HTML Email Template Code</h2>
              <button
                className={`flex items-center gap-1 text-sm p-2 border-2 bg-violet-600 border-violet-600 rounded-sm cursor-pointer md:pl-5 md:pr-5 
                "hover:bg-violet-600 text-slate-50`}
                onClick={CopyCode}
              >
                {copied ? (
                  <MdOutlineCelebration className="h-4 w-4" />
                ) : (
                  <MdOutlineContentCopy className="h-4 w-4" />
                )}
                {copied ? "Code Copied" : "Copy"}
              </button>
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="max-h-[500px] overflow-auto bg-slate-950 text-slate-300 rounded-lg p-5">
              <pre className="whitespace-pre-wrap break-all">
                <code>{htmlCode}</code>
              </pre>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ViewHTMLDialog;
