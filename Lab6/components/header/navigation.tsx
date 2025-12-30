"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";  
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export default function Navigation() {
  const { isAuthenticated, username, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <nav className="mb-8 bg-white shadow-sm rounded-lg px-6 py-4">
      <div className="flex justify-between items-center">
   
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
            About
          </Link>
          <Link href="/shop/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Products
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Contact
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Dashboard
          </Link>
        </div>

     
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                <User size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{username}</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="destructive"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </Button>
            </>
          ) : (
            <Link href="/auth/login">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}