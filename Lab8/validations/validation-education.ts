import { z } from "zod";

export const educationSchema = z.object({
  educations: z.array(
    z.object({
      school: z.string().min(1, "Vui lòng nhập tên trường"),
      degree: z.string().min(1, "Vui lòng nhập bằng cấp"),
      graduateYear: z.string().min(1, "Vui lòng nhập năm tốt nghiệp"),
    })

  )
   .min(1, "Phải có ít nhất 1 học vấn"),
});
