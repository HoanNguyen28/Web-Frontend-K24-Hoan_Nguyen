'use client';

import { X } from "lucide-react";

interface Props {
  message?: string;
  onClose?: () => void;
}

export default function FormError({ message, onClose }: Props) {
  if (!message) return null;

  return (
    <div className="relative rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
 
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-red-400 hover:text-red-600 cursor-pointer "
        >
          <X size={18} />
        </button>
      )}

      <div className="flex gap-3">

        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
          ✕
        </div>

        <div>
          <p className="font-semibold">Lỗi</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
