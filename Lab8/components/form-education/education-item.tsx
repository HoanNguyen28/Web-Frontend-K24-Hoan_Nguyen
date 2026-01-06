import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  index: number;
  register: any;
  errors: any;
  onRemove: () => void;
  canRemove: boolean;
}

export default function EducationItem({
  index,
  register,
  errors,
  onRemove,
  canRemove,
}: Props) {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">
          Học vấn #{index + 1}
        </h3>

        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-500 text-sm"
          >
            Xóa
          </button>
        )}
      </div>


      <div>
        <Label className="block mb-2">
          Trường <span className="text-red-500">*</span>
        </Label>
        <Input
          {...register(`educations.${index}.school`)}
          placeholder="Tên trường"
        />
        {errors?.educations?.[index]?.school && (
          <p className="text-red-500 text-sm mt-1">
            {errors.educations[index].school.message}
          </p>
        )}
      </div>

      
      <div>
        <Label className="block mb-2">
          Bằng cấp <span className="text-red-500">*</span>
        </Label>
        <Input
          {...register(`educations.${index}.degree`)}
          placeholder="Bằng cấp"
        />
        {errors?.educations?.[index]?.degree && (
          <p className="text-red-500 text-sm mt-1">
            {errors.educations[index].degree.message}
          </p>
        )}
      </div>


      <div>
        <Label className="block mb-2">
          Năm tốt nghiệp <span className="text-red-500">*</span>
        </Label>
        <Input
          {...register(`educations.${index}.graduateYear`)}
          placeholder="VD: 2024"
        />
        {errors?.educations?.[index]?.graduateYear && (
          <p className="text-red-500 text-sm mt-1">
            {errors.educations[index].graduateYear.message}
          </p>
        )}
      </div>
    </div>
  );
}
