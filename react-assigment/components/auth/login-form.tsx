'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';
import { loginSchema, LoginFormData } from '@/lib/validations/auth';
import { useRouter } from 'next/navigation'; 

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); 

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      // SỬA LẠI URL TẠI ĐÂY: /auth/login
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          expiresInMins: 1440, 
        }),
      });

      const result = await res.json();

      if (res.ok) {
        // Lưu Token và Object User (chứa ảnh đại diện)
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('user', JSON.stringify(result));

        alert(`Đăng nhập thành công! Chào mừng ${result.firstName}`);

        // Dùng window.location để trang chủ nhận diện được localStorage mới ngay lập tức
        window.location.href = '/'; 
      } else {
        alert(result.message || 'Sai tài khoản hoặc mật khẩu');
      }
    } catch (error) {
      console.error('Lỗi kết nối:', error);
      alert('Đã xảy ra lỗi hệ thống.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm h-full">
      {/* ... Phần UI giữ nguyên như của bạn ... */}
      <div className="relative h-48 lg:h-64">
        <img src="/assets/img/banner/login-bg.jpg" alt="Login" className="w-full h-full object-cover" />
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-gray-50 rounded-lg shadow-sm text-[#D31243]">
            <Lock size={20} />
          </span>
          <h2 className="text-xl font-bold text-gray-800">Đăng nhập tài khoản</h2>
        </div>
        
        <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
          <div>
            <input 
              {...register('username')} 
              placeholder="Username (emilys)" 
              className="w-full p-3 border rounded-md outline-none focus:border-[#D31243] text-sm"
            />
            {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <input 
              {...register('password')} 
              type="password" 
              placeholder="Password (emilyspass)" 
              className="w-full p-3 border rounded-md outline-none focus:border-[#D31243] text-sm"
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#D31243] text-white py-3 rounded-md font-bold hover:bg-rose-700 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <>Đăng nhập <ArrowRight size={18} /></>}
          </button>
        </form>
      </div>
    </div>
  );
}