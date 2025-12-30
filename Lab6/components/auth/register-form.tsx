"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthForm from "./auth-form";
import { useAuth } from "@/lib/auth-context";

export default function RegisterForm() {
  const { register } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu phải ít nhất 6 ký tự");
      setLoading(false);
      return;
    }

    const success = register(username, email, password);

    if (success) {
      alert("Đăng ký thành công!");
      router.push("/auth/login");
    } else {
      setError("Username hoặc Email đã tồn tại");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthForm
        title="Register"
        description="Create your account"
        footer={
          <>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Đang đăng ký..." : "Register"}
            </Button>

            <Link
              href="/auth/login"
              className="text-sm text-blue-600"
            >
              Already have an account? Login
            </Link>
          </>
        }
      >
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </AuthForm>
    </form>
  );
}
