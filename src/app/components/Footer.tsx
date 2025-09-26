"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="mb-2 md:mb-0">
            &copy; {currentYear} KitWebs. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className={
              pathname === "/politica-de-privacidade"
                ? "text-white font-bold"
                : "text-gray-400 hover:text-white"
            }
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
