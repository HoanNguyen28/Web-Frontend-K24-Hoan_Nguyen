import { z } from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập họ và tên"),

  email: z
    .string()
    .trim()
    .email("Email không hợp lệ"),

  message: z
    .string()
    .trim()
    .min(10, "Nội dung liên hệ phải ít nhất 10 ký tự"),
  
  phone: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập số điện thoại"),
  
  dob: z
    .string()
    .min(1, "Vui lòng chọn ngày sinh"),

   gender: z
    .string()
    .min(1, "Vui lòng chọn giới tính"),
  
  address: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập địa chỉ"),

});
