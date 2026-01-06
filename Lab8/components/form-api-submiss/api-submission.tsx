'use client';

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { registerSchema } from "@/validations/register-api-schema";

import InputField from "@/components/form-validation/input-field";
import FormError from "./form-error";
import FormSuccess from "./form-success";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function ApiSubmission() {
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setApiError("");
    setApiSuccess("");

    try {
      await axios.post("/api/register", data);

      setApiSuccess("Đăng ký tài khoản thành công ");
    } catch (error: any) {
      setApiError(
        error?.response?.data?.message ||
        "Có lỗi xảy ra, vui lòng thử lại"
      );
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Gửi dữ liệu lên API và xử lý lỗi
        </CardDescription>
      </CardHeader>

      <CardContent>
          <div className="mb-4">
        <FormError
            message={apiError}
            onClose={() => setApiError("")}
            
        />
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
            label="Mật khẩu"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />

          
          <FormSuccess message={apiSuccess} />

          <Button
            type="submit"
            disabled={isSubmitting}
            className=" bg-green-600 hover:bg-green-700 px-8 cursor-pointer "
          >
            {isSubmitting ? "Đang gửi..." : "Đăng ký"}
          </Button>

        </form>
        </div>
      </CardContent>
    </Card>
  );
}
