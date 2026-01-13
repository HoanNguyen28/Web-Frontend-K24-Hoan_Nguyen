'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export function Logout({ className }: { className?: string }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  
    window.location.href = '/auth';
  };

  return (
    <button 
      onClick={handleLogout}
      className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors ${className}`}
    >
      <LogOut size={16} />
      <span>Đăng xuất</span>
    </button>
  );
}