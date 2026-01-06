import { z } from "zod";

export const advancedFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Mật khẩu phải ít nhất 8 ký tự")
      .regex(/[A-Z]/, "Phải có ít nhất 1 chữ hoa")
      .regex(/[a-z]/, "Phải có ít nhất 1 chữ thường")
      .regex(/[0-9]/, "Phải có ít nhất 1 số")
      .regex(/[^A-Za-z0-9]/, "Phải có ít nhất 1 ký tự đặc biệt"),

    confirmPassword: z.string(),

    birthday: z.string().min(1, "Vui lòng chọn ngày sinh"),

    creditCard: z
      .string()
      .regex(
        /^\d{4}-\d{4}-\d{4}-\d{4}$/,
        "Số thẻ phải đúng định dạng XXXX-XXXX-XXXX-XXXX"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  })
  .refine((data) => {
    const birthday = new Date(data.birthday);
    const today = new Date();

    const age =
      today.getFullYear() -
      birthday.getFullYear() -
      (today <
      new Date(
        birthday.getFullYear() + 
        (today.getFullYear() - birthday.getFullYear()),
        birthday.getMonth(),
        birthday.getDate()
      )
        ? 1
        : 0);

    return age >= 18;
  }, {
    message: "Bạn phải đủ 18 tuổi",
    path: ["birthday"],
  });
