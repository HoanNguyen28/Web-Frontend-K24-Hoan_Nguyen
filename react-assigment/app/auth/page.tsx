import { LoginForm } from '@/components/auth/login-form';
import { RegisterForm } from '@/components/auth/register-form';

export default function AuthPage() {
  return (
    <main className="min-h-screen py-12 bg-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}