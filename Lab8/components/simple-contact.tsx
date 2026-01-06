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


import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type ContactFormData = z.infer<typeof contactSchema>;

export default function SimpleContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Dữ liệu liên hệ:", data);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Exercise 1: Building a Simple Contact Form</CardTitle>
        <CardDescription>
          Gửi thông tin để chúng tôi liên hệ lại với bạn
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

       
          <div>
             <Label htmlFor="name" className="mb-1 block">
               Họ và tên <span className="text-red-500">*</span>
              </Label>
            <Input
              placeholder="Họ và tên"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

        
          <div>
            <Label htmlFor="email" className="mb-1 block">
             Email <span className="text-red-500">*</span>
             </Label>
            <Input
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

        
          <div>
            <Label htmlFor="email" className="mb-1 block">
              Tin nhắn <span className="text-red-500">*</span>
            </Label>
            <Textarea
              placeholder="Nội dung liên hệ"
              rows={4}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full cursor-pointer ">
            Gửi liên hệ
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
