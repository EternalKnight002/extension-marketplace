// src/components/Modal.tsx
"use client"; // Modal is interactive — must be a client component

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

/**
 * Accessible Modal using Radix Dialog.
 *
 * Props:
 * - open: boolean (controlled open state)
 * - onOpenChange: (open: boolean) => void (control callback)
 * - title?: string (optional title shown in header)
 * - children: React.ReactNode (modal body)
 *
 * Usage:
 * const [open, setOpen] = useState(false);
 * <Modal open={open} onOpenChange={setOpen} title="Screenshots">...</Modal>
 *
 * The Dialog overlay and content have simple Tailwind classes — adjust to match your theme.
 */

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
        {/* Overlay: semi-transparent backdrop that covers the screen */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />

        {/* Content: centered modal panel */}
        <Dialog.Content
          // Accessible container — aria-label will be inferred from title or can be set explicitly
          className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/90 dark:bg-[#071025]/90 p-4 shadow-xl focus:outline-none"
          aria-label={title ?? "Modal"}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            {/* Close button — Radix Dialog.Close handles closing and keyboard accessibility */}
            <Dialog.Close aria-label="Close" className="p-1 rounded focus-ring">
              <X />
            </Dialog.Close>
          </div>

          {/* Modal body */}
          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
