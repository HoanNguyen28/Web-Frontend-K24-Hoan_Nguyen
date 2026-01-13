import * as z from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "Vui lòng nhập họ"),
  lastName: z.string().min(1, "Vui lòng nhập tên"),
  country: z.string().min(1, "Vui lòng chọn quốc gia"),
  address: z.string().min(1, "Vui lòng nhập địa chỉ"),
  city: z.string().min(1, "Vui lòng nhập Thành phố"),
  state: z.string().min(1, "Vui lòng nhập Tỉnh/Vùng"),
  postcode: z.string().min(1, "Vui lòng nhập mã bưu điện"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 số"),
  paymentMethod: z.enum(["bank_transfer", "cheque", "paypal"], {
    errorMap: () => ({ message: "Vui lòng chọn phương thức thanh toán" }),
  }),
  

  createAccount: z.boolean().default(false),
  shipToDifferentAddress: z.boolean().default(false),


  companyName: z.string().optional().default(""),
  apartment: z.string().optional().default(""),
  orderNotes: z.string().optional().default(""),
});


export type CheckoutFormData = z.infer<typeof checkoutSchema>;