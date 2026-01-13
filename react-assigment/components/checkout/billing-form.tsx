'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CheckoutFormData } from '@/lib/validations/checkout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BillingFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  setValue: any; // Cần thiết để update giá trị cho Shadcn Select/Checkbox
}

export function BillingForm({ register, errors, setValue }: BillingFormProps) {
  
  // Helper hiển thị lỗi
  const ErrorMessage = ({ name }: { name: keyof CheckoutFormData }) => (
    errors[name] ? <p className="text-xs text-[#D31243] mt-1">{errors[name]?.message as string}</p> : null
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Billing Details</h2>

      {/* Quốc gia - Shadcn Select */}
      <div className="space-y-2">
        <Label className="text-gray-700 font-semibold">
          Quốc gia <span className="text-[#D31243]">*</span>
        </Label>
        <Select onValueChange={(value) => setValue('country', value)} defaultValue="Vietnam">
          <SelectTrigger className="w-full focus:ring-[#D31243] border-gray-200">
            <SelectValue placeholder="Chọn quốc gia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Vietnam">Việt Nam</SelectItem>
            <SelectItem value="United States">Hoa Kỳ</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" {...register('country')} />
        <ErrorMessage name="country" />
      </div>

      {/* Họ và Tên */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-700 font-semibold">
            Họ <span className="text-[#D31243]">*</span>
          </Label>
          <Input 
            id="firstName"
            {...register('firstName')} 
            placeholder="VD: Nguyễn" 
            className={`focus-visible:ring-[#D31243] ${errors.firstName ? 'border-[#D31243]' : 'border-gray-200'}`}
          />
          <ErrorMessage name="firstName" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-700 font-semibold">
            Tên <span className="text-[#D31243]">*</span>
          </Label>
          <Input 
            id="lastName"
            {...register('lastName')} 
            placeholder="VD: Văn A" 
            className={`focus-visible:ring-[#D31243] ${errors.lastName ? 'border-[#D31243]' : 'border-gray-200'}`}
          />
          <ErrorMessage name="lastName" />
        </div>
      </div>

      {/* Địa chỉ */}
      <div className="space-y-3">
        <Label className="text-gray-700 font-semibold">
          Địa chỉ <span className="text-[#D31243]">*</span>
        </Label>
        <Input 
          {...register('address')} 
          placeholder="Số nhà, tên đường..." 
          className="focus-visible:ring-[#D31243] border-gray-200"
        />
        <Input 
          {...register('apartment')} 
          placeholder="Căn hộ, phòng, đơn vị... (tùy chọn)" 
          className="focus-visible:ring-[#D31243] border-gray-200"
        />
        <ErrorMessage name="address" />
      </div>

      {/* Email và SĐT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-gray-700 font-semibold">
            Địa chỉ Email <span className="text-[#D31243]">*</span>
          </Label>
          <Input 
            type="email" 
            {...register('email')} 
            placeholder="example@gmail.com" 
            className="focus-visible:ring-[#D31243] border-gray-200"
          />
          <ErrorMessage name="email" />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700 font-semibold">
            Số điện thoại <span className="text-[#D31243]">*</span>
          </Label>
          <Input 
            type="tel" 
            {...register('phone')} 
            placeholder="090..." 
            className="focus-visible:ring-[#D31243] border-gray-200"
          />
          <ErrorMessage name="phone" />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="pt-4 space-y-6">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="createAccount" 
            onCheckedChange={(checked) => setValue('createAccount', checked)}
            className="border-gray-300 data-[state=checked]:bg-[#D31243] data-[state=checked]:border-[#D31243]"
          />
          <Label htmlFor="createAccount" className="text-sm text-gray-600 cursor-pointer">
            Tạo tài khoản mới?
          </Label>
        </div>
        
        <div className="flex items-center justify-between border-t pt-6">
          <span className="text-xl font-bold text-gray-800">Giao hàng đến địa chỉ khác?</span>
          <Checkbox 
            id="shipToDifferentAddress"
            onCheckedChange={(checked) => setValue('shipToDifferentAddress', checked)}
            className="w-6 h-6 border-gray-300 data-[state=checked]:bg-[#D31243] data-[state=checked]:border-[#D31243]"
          />
        </div>
      </div>
    </div>
  );
}