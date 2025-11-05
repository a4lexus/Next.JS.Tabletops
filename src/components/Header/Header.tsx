import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function Header() {
  return (
    <header className="bg-amber-100 text-cyan-700 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"}>
            <img
              alt="Lear Corporation"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lear_Corporation_logo.svg/1200px-Lear_Corporation_logo.svg.png"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <nav className="flex items-center justify-evenly flex-1 ml-4 w-full gap-1">
            <Link
              href={"/blog"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Blog
            </Link>
            <Link
              href={"/about"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              About
            </Link>
            <Link
              href={"/blog/post"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Post
            </Link>
            <Link
              href={"/playground/find-play"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Playground
            </Link>
            <Link
              href={"/help/faq"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              FAQ
            </Link>
            <Link
              href={"/users-client-ver"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Users-Client
            </Link>
            <Link
              href={"/users-server-ver"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Users-Server
            </Link>
            <Link
              href={"/products-client-ver"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Products-Client
            </Link>
            <Link
              href={"/products-server-ver"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Products-Server
            </Link>
            <Link
              href={"/events/new"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Create Event
            </Link>
            <Link
              href={"/events"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Events
            </Link>
            <Link
              href={"/playground/add-game"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Create Game
            </Link>
            <Link
              href={"/playground/games"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Games
            </Link>
            <Link
              href={"/login"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Sign in
            </Link>
            <Link
              href={"/profile"}
              className="w-full text-center px-3 py-2 rounded-md text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:bg-amber-200 transition"
            >
              Profile
            </Link>
            <ThemeToggle />
           
          </nav>
        </div>
      </div>
    </header>
  );
}
