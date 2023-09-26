"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Navbar() {
  const { status, data: session } = useSession();
  //if (status === "loading") return null;
  return (
    <header className="bg-indigo-900 text-white">
      <nav className="flex justify-between p-4">
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/"
              className="transition-all duration-300 hover:text-indigo-500"
            >
              Home
            </Link>
          </li>
          {/* {status === "loading" && <Spinner/>} */}
          {status === "authenticated" && <div>
            {session.user?.name}
            <Link href="/api/auth/signout" className="ml-2">sign out</Link>
            </div>}
          {status === "unauthenticated" && (
            <li>
              <Link
                href="/api/auth/signin"
                className="transition-all duration-300 hover:text-indigo-500"
              >
                Login
              </Link>
            </li>
          )}

          <li>
            <Link
              href="/movies"
              className="transition-all duration-300 hover:text-indigo-500"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="transition-all duration-300 hover:text-indigo-500"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="transition-all duration-300 hover:text-indigo-500"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="transition-all duration-300 hover:text-indigo-500"
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              href="/users/new-user"
              className="transition-all duration-300 hover:text-indigo-500"
            >
              Add New User
            </Link>
          </li>
        </ul>
        <Link className="font-bold mx-3" href={"/"}>
          Mern Film
        </Link>
      </nav>
    </header>
  );
}
