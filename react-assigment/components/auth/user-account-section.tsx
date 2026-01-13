'use client';

import { useEffect, useState } from "react";
import { AccountButton } from "@/components/header-atomic/header-top-atomic/account/account-button";

export function UserAccountSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Chỉ chạy ở phía client
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setIsLoggedIn(true);
        setUserData(JSON.parse(storedUser));
      } catch (error) {
        console.error("Lỗi parse user data:", error);
      }
    }
  }, []);

  return (
    <AccountButton 
      isLoggedIn={isLoggedIn} 
      userData={userData} 
    />
  );
}