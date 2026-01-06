'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { advancedFormSchema } from "@/validations/advanced-form-schema";

import InputField from "@/components/form-validation/input-field";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type FormData = z.infer<typeof advancedFormSchema>;

export default function AdvancedForm() {
  const {
  register,
  handleSubmit,
  formState: { errors, touchedFields },
} = useForm<FormData>({
  resolver: zodResolver(advancedFormSchema),
});


  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu hợp lệ:", data);
  };

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Exercise 5: Advanced Form Validation</CardTitle>
        <CardDescription>
          Form với các quy tắc validation nâng cao
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <InputField
            label="Mật khẩu"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            register={register}
            error={errors.password}
            touched={touchedFields.password}
          />

          <p className="text-sm text-muted-foreground">
            Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt
          </p>

          <InputField
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            type="password"
            placeholder="Xác nhận mật khẩu"
            register={register}
            error={errors.confirmPassword}
            touched={touchedFields.confirmPassword}
          />

          <InputField
            label="Ngày sinh"
            name="birthday"
            type="date"
            register={register}
            error={errors.birthday}
            touched={touchedFields.birthday}
          />

          <InputField
            label="Số thẻ tín dụng"
            name="creditCard"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            register={register}
            error={errors.creditCard}
            touched={touchedFields.creditCard}
          />

          <Button className="bg-green-600 hover:bg-green-700">
            Xác nhận
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
