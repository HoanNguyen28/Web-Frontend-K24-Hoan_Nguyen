'use client';

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { educationSchema } from "@/validations/validation-education";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import EducationItem from "./education-item";

type FormData = z.infer<typeof educationSchema>;

export default function DynamicFields() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      educations: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu học vấn:", data);
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Thông tin học vấn</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 cursor-pointer ">

 
          {errors.educations?.message && (
            <p className="text-red-500 text-sm">
              {errors.educations.message}
            </p>
          )}

    
        {fields.map((field, index) => (
  <EducationItem
    key={field.id}
    index={index}
    register={register}
    errors={errors}
    onRemove={() => remove(index)}
    canRemove={fields.length > 1}
  />
))}

          <Button
            type="button"
            variant="outline"
            className="w-full cursor-pointer "
            onClick={() =>
              append({ school: "", degree: "", graduateYear: "" })
            }
          >
            + Thêm học vấn
          </Button>

   
          <div className="pt-4">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white cursor-pointer "
            >
              Lưu thông tin
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
