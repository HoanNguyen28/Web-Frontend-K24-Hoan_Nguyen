'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserPlus, ArrowRight, Loader2 } from 'lucide-react';
import { registerSchema, RegisterFormData } from '@/lib/validations/auth';

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  
  // Token bạn cung cấp (Emily Johnson)
  const MY_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NjgyOTcwNDAsImV4cCI6MTc2ODMwMDY0MH0.vK6j1IIUbB-9BZbA-i5YanEwx0nfofpTVL9zdUp6_bU";

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onRegisterSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MY_TOKEN}` 
        },
        body: JSON.stringify({
          firstName: "Eric",
          lastName: "Nguyen",
          username: data.email.split('@')[0],
          password: data.password,
          email: data.email,
          gender: "male"
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert(`Đăng ký thành công! User mới: ${result.username} (ID: ${result.id})`);
        console.log('Phản hồi từ API (JSON):', result);
      } else {
        alert('Lỗi khi gọi API Register');
      }
    } catch (error) {
      alert('Lỗi kết nối API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F1ED] rounded-xl overflow-hidden border border-gray-100 shadow-sm h-full">
      <div className="relative h-48 lg:h-64">
        <img src="/assets/img/banner/sign-bg.jpg" alt="Register" className="w-full h-full object-cover" />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-white rounded-lg shadow-sm text-gray-700">
            <UserPlus size={20} />
          </span>
          <h2 className="text-xl font-bold text-gray-800">Đăng ký thành viên</h2>
        </div>
        
        <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-4">
          <input 
            {...register('email')} 
            type="email" 
            placeholder="Nhập Email để đăng ký" 
            className="w-full p-3 border bg-white rounded-md outline-none focus:border-gray-400 text-sm"
          />
          <input 
            {...register('password')} 
            type="password" 
            placeholder="Mật khẩu" 
            className="w-full p-3 border bg-white rounded-md outline-none focus:border-gray-400 text-sm"
          />
          
          <button 
            disabled={loading}
            className="w-full bg-[#EBE3D5] text-gray-800 py-3 rounded-md font-bold hover:bg-gray-200 transition-all border border-gray-300 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <>Đăng ký ngay <ArrowRight size={18} /></>}
          </button>
        </form>
      </div>
    </div>
  );
}