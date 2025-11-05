"use client";

import { signIn, signOut } from "next-auth/react";

const LoginPage = ({}) => {
  return (
    <div>
      <button type="button" onClick={() => signIn("google")}>
        Google Sign In
      </button> <br />
      {/* <button type="button" onClick={() => signOut("google")}>
        Google Sign out
      </button> */}
    </div>
  );
};

export default LoginPage;