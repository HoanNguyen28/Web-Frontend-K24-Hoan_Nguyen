"use client";

import { useRequireAuth } from "@/hooks/useRequire-auth";

export default function DashboardPage() {
  const isAuthenticated = useRequireAuth();

  if (!isAuthenticated) {
    return null;
  }
  return (
      <main>
        <h1 className="underline">Dashboard</h1>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="text-gray-700 text-2xl font-bold">Chào mừng các bạn đã đến với dashboard</p>
        </div>
      </main>
  
  );
}
