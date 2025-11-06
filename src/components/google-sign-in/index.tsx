"use client";
import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleSignIn() {
  // useSession - для получения сессии в клиентском компоненте
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button
          type="button"
          onClick={() => signOut()}
          className="hover:text-[#b96011] border-2 rounded-2xl p-1 flex items-center gap-1"
        >
          <span>Sign out</span>
          <LogOut />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => signIn("google")}
          className="hover:text-[#984d0a] border-2 rounded-2xl p-1 flex items-center gap-1"
        >
          <span>Sign in</span> 
          <LogIn />
        </button>
      )}
    </div>
  );
}
