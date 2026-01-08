'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function UserPage() {
  const token = useSelector((state: RootState) => state.auth.token);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (!token) return;
    const fetchUser = async () => {
      const res = await fetch('https://dummyjson.com/auth/users/1', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUserInfo(data);
    };
    fetchUser();
  }, [token]);

  if (!token) return <p>Sai tài khoản</p>;
  if (!userInfo) return <p>Đang tải thông tin.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl mb-4">User Info</h2>
      <p><strong>First Name:</strong> {userInfo.firstName}</p>
      <p><strong>Last Name:</strong> {userInfo.lastName}</p>
      <p><strong>Maiden Name:</strong> {userInfo.maidenName}</p>
      <p><strong>Age:</strong> {userInfo.age}</p>
      <p><strong>Gender:</strong> {userInfo.gender}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Phone:</strong> {userInfo.phone}</p>
    </div>
  );
}
