import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectGender({ setValue, error }: any) {
  return (
    <div>
      <Label className="block mb-2">
        Giới tính <span className="text-red-500">*</span>
      </Label>

      <Select onValueChange={(value) => setValue("gender", value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Chọn giới tính" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Nam</SelectItem>
          <SelectItem value="female">Nữ</SelectItem>
          <SelectItem value="other">Khác</SelectItem>
        </SelectContent>
      </Select>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
