"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return <p className="text-gray-500 text-lg p-4">Loading users...</p>;

  if (error)
    return (
      <div className="p-4">
        <p className="text-red-500 text-lg mb-2">{error}</p>
        <Button onClick={fetchUsers}>Retry</Button>
      </div>
    );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-2 rounded hover:shadow transition-shadow"
          >
            <strong>{user.name}</strong> - <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
