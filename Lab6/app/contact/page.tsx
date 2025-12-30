
"use client";
import { useRequireAuth } from "@/hooks/useRequire-auth";

export default function ContactPage() {
  const isAuthenticated = useRequireAuth();

    if (!isAuthenticated) {
    return null;
  }
  return (
       <main>
        <h1 className="underline">Contact Page</h1>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="text-green-500 text-2xl font-bold">Chào mừng các bạn đã đến với contact page</p>
        </div>
      </main>
  );
}
