"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthForm from "./auth-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const router = useRouter();
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  const success = login(username, password);

  if (success) {
    router.push("/"); 
  } else {
    setError("Sai tài khoản hoặc mật khẩu");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <AuthForm
        title="Login"
        description="Welcome back!"
        footer={
          <>
            <Button type="submit" className="w-full">Login</Button>
            <Link href="/auth/register" className="text-sm text-blue-600">
              Create account
            </Link>
          </>
        }
      >
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </AuthForm>
    </form>
  );
}
