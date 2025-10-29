import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-amber-200 text-cyan-600 min-h-14 p-3.5 ">
      <img
        alt="Lear Corporation"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lear_Corporation_logo.svg/1200px-Lear_Corporation_logo.svg.png"
        className="size-10 h-12 w-40"
      />
      <div>
        <nav className="flex justify-evenly ">
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog/post"}>Post</Link>
          <Link href={"/playground/find-play"}>Find & Play</Link>
          <Link href={"/help/faq"}>FAQ</Link>
          <Link href={"/users-client-ver"}>Users-Client</Link>
          <Link href={"/users-server-ver"}>Users-Server</Link>
          <Link href={"/products-client-ver"}>Products-Client</Link>
          <Link href={"/products-server-ver"}>Products-Server</Link>
        </nav>
      </div>
    </div>
  );
}
