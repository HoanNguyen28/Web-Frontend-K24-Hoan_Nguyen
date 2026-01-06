'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { contactSchema } from "@/validations/validation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import InputField from "./input-field";
import SelectGender from "./select-gender";
import TextareaField from "./textarea-field";

type ContactFormData = z.infer<typeof contactSchema>;

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      gender: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Dữ liệu đăng ký:", data);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Đăng ký</CardTitle>
        <CardDescription>
          Vui lòng điền đầy đủ thông tin bên dưới
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <InputField
            label="Họ và tên"
            name="name"
            register={register}
            error={errors.name}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
          />

          <InputField
            label="Số điện thoại"
            name="phone"
            register={register}
            error={errors.phone}
          />

          <InputField
            label="Ngày sinh"
            name="dob"
            type="date"
            register={register}
            error={errors.dob}
          />

          <SelectGender
            setValue={setValue}
            error={errors.gender}
          />

          <TextareaField
            label="Địa chỉ"
            name="address"
            register={register}
            error={errors.address}
          />

          <Button
            type="submit"
            className="px-8 bg-green-500 hover:bg-green-600 cursor-pointer "
          >
            Đăng ký
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}
