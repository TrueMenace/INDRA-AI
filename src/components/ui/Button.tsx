import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-5
        py-2.5
        rounded-lg
        bg-blue-600
        text-white
        font-medium
        hover:bg-blue-700
        transition-colors
        disabled:bg-slate-300
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}