'use client';

import { useState } from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";
import { Logout } from "@/components/auth/logout"; 

interface AccountButtonProps {
  isLoggedIn?: boolean;
  userData?: any; 
}

export const AccountButton = ({ isLoggedIn, userData }: AccountButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <Link href="/auth" className="flex items-center hover:text-[#D31243]">
        <User size={22} />
      </Link>
    );
  }

  return (
    // Sử dụng onMouseEnter và onMouseLeave ở thẻ bao ngoài cùng
    <div 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Avatar Button */}
      <div className="flex items-center cursor-pointer py-2">
        <img 
          src={userData?.image || "/assets/img/icon/default-avatar.png"} 
          alt="Avatar" 
          className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#D31243] transition-all object-cover"
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 w-48 bg-white border border-gray-100 shadow-xl rounded-lg z-50 py-1 overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="px-4 py-2 border-b border-gray-50">
            <p className="text-xs text-gray-400">Xin chào,</p>
            <p className="text-sm font-bold truncate text-[#D31243]">
              {userData?.firstName} {userData?.lastName}
            </p>
          </div>

          <Link 
            href="/account" 
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D31243] transition-colors"
          >
            <Settings size={16} />
            <span>Tài khoản của tôi</span>
          </Link>

          <div className="border-t border-gray-50"></div>

          <Logout />
        </div>
      )}
    </div>
  );
};