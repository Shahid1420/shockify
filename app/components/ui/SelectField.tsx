import Label from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Control, Controller, UseFormRegisterReturn } from "react-hook-form";

type SelectFieldProps = {
  label: string;
  name: string;
  control: Control;
  placeholder: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
};

const SelectField = ({
  label,
  name,
  control,
  placeholder = "",
  register,
  options,
  required = false,
  error,
}: SelectFieldProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        control={control}
        name={name}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            {...register}
            className={error ? "border-red-500" : "border-gray-300"}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt, index) => (
                <SelectItem key={index} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;
