import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: any;
  touched?: boolean;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  touched,
}: Props) {
  return (
    <div>
      <Label className="block mb-2">
        {label} <span className="text-red-500">*</span>
      </Label>

      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={cn(
          error && "border-red-500 focus-visible:ring-red-500",
          touched && !error && "border-green-500 focus-visible:ring-green-500"
        )}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
