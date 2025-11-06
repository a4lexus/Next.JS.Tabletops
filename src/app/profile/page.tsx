import { getServerSession } from "next-auth";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await getServerSession();
  if (!session) return <div>Not signed in</div>;
  return (
    <div>
      <h1>Hello, {session.user?.email}</h1>
      <Image
        src={session.user?.image || ""}
        width={250}
        height={250}
        alt="avatar"
        unoptimized
      />
      <p>Google ID:{session.user.name}</p>
    </div>
  );
};

export default ProfilePage;