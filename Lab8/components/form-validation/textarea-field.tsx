import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaField({
  label,
  name,
  register,
  error,
}: any) {
  return (
    <div>
      <Label className="block mb-2">
        {label} <span className="text-red-500">*</span>
      </Label>

      <Textarea rows={4} {...register(name)} />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
