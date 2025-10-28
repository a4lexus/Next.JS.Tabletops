import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-amber-50">
      <nav>
        <Link href={"/blog"}>Blog</Link> <br />
        <Link href={"/about"}>About</Link> <br />
        <Link href={"/blog/post"}>Post</Link> <br />
        <Link href={"/playground/find-play"}>Find & Play</Link> <br />
      </nav>
    </div>
  );
}
