// src/components/Modal.tsx
"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onOpenChange, title, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/90 dark:bg-[#071025]/90 p-4 shadow-xl focus:outline-none"
          aria-label={title ?? "Modal"}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Dialog.Close aria-label="Close" className="p-1 rounded focus-ring">
              <X />
            </Dialog.Close>
          </div>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
