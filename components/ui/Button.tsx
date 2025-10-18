"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-4 py-2 rounded disabled:opacity-50 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
