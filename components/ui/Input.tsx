import { ComponentProps } from "react";

const Input = ({
  className,
  type = "text",
  ...props
}: ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={`w-full px-3 py-2 border rounded-md shadow-sm ${className}`}
      {...props}
    />
  );
};

Input.displayName = "Input"; // Necessary for React Dev Tools

export default Input;
