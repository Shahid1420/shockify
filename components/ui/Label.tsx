import { ReactNode } from "react";

type LabelProps = {
  htmlFor: string;
  children: ReactNode;
  className?: string;
};
const Label = ({ htmlFor, children, className = "" }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm/6 font-medium mb-1 sm:text-lg/8 ${className}`}
    >
      {children}
    </label>
  );
};
export default Label;
