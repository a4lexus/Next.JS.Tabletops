import Link from "next/link";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-amber-500">
      <nav className="font-bold">
        <Link href={"/playground/find-play"}>Find & Play</Link> <br />
        <Link href={"/playground/games"}>Games</Link> <br />
        <Link href={"/playground/players"}>Players</Link> <br />
        <Link href={"/playground/add-game"}>Add Game</Link> <br />
      </nav>

      {children}
    </div>
  );
}
