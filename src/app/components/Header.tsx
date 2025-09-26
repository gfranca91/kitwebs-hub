"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">KitWebs</Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={
                pathname === "/sobre"
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
