"use client";

import User from "@/types/User";
import { useEffect, useState } from "react";

const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="bg-blue-200 h-screen">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersClient;
