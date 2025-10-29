import User from "@/types/User";

const UserServerVersion = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    //cache: "force-cache",
    //cache:"force-cache",
    //next: {revalidate: 60},
  });
  const { users } = await res.json();
  return (
    <div className="bg-blue-200 h-screen">
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserServerVersion;
