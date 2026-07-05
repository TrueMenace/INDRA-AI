import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        border
        border-slate-200
        shadow-sm
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}