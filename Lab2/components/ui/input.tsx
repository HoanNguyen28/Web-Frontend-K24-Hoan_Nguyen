import * as React from "react";

function Input({ className = "", type = "text", ...props }) {
  return (
    <input
      type={type}
      className={`border px-3 py-2 w-full bg-neutral-50 outline-none focus:border-black ${className}`}
      {...props}
    />
  );
}

export { Input };
