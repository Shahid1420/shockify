import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  error?: string;
  register: UseFormRegisterReturn;
};

const InputField = ({
  label,
  name,
  type,
  register,
  error,
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        className={`${error ? "border-red-500" : "border-gray-300"}`}
        {...register}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
