'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/auth-slice';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      dispatch(setCredentials({ user: data, token: data.accessToken }));
      router.push('/user');
    } catch (err) {
      console.error(err);
      alert('Login thất bại');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mb-2 w-full"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
