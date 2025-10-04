"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0a1f1a] text-white ">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        {/* One-row flex */}
        <div className="flex items-center pt-3">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={112}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Center: Links (left-aligned, not centered) */}
          <nav className="hidden md:block flex-1 mx-32">
            <ul className="flex items-center gap-8 text-[15px] font-semibold hover:cursor-pointer">
              <li>
                <Link href="/about" className="hover:text-[#8af135] transition-colors duration-300 ">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8af135] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#8af135] transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#8af135] transition-colors duration-300">
                  Articles
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Contact capsule */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-3 rounded-t-[22px] rounded-b-none bg-[#8af135] px-8 py-2 text-white shadow-[0_10px_24px_rgba(0,0,0,.25)] py-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#0a1f1a] px-12 py-3 font-bold hover:bg-white hover:text-[#0f2923] transition-colors duration-300"
              >
                Contact
              </Link>
              {/* 3×3 grid */}
<span
  aria-hidden
  className="group grid grid-cols-3 gap-[3px] pr-1 cursor-pointer"
>
  {Array.from({ length: 9 }).map((_, i) => (
    <span
      key={i}
      className="h-[6px] w-[6px] rounded-[2px] bg-[#0f2923] transition-colors duration-300 group-hover:bg-white"
    />
  ))}
</span>

            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto flex md:hidden rounded-md p-2 ring-1 ring-white/20"
            aria-label="Toggle menu"
          >
            <span className="grid grid-cols-3 gap-[3px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[6px] w-[6px] rounded-[2px] bg-white"
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-[1240px] px-4 pb-4">
          <ul className="space-y-2 text-[15px] font-semibold">
            <li>
              <Link
                href="/link1"
                className="block rounded-lg bg-white/5 px-4 py-3"
              >
                Link 1
              </Link>
            </li>
            <li>
              <Link
                href="/link2"
                className="block rounded-lg bg-white/5 px-4 py-3"
              >
                Link 2
              </Link>
            </li>
            <li>
              <Link
                href="/link3"
                className="block rounded-lg bg-white/5 px-4 py-3"
              >
                Link 3
              </Link>
            </li>
            <li>
              <Link
                href="/link4"
                className="block rounded-lg bg-white/5 px-4 py-3"
              >
                Link 4
              </Link>
            </li>
          </ul>

          {/* Mobile capsule */}
          <div className="mt-3 flex justify-end">
            <div className="flex items-center gap-3 rounded-[22px] bg-[#8af135] px-3 py-2 text-white">
              <Link
                href="/contact"
                className="rounded-full bg-white/15 px-4 py-1.5 font-semibold"
              >
                Contact
              </Link>
              <span aria-hidden className="grid grid-cols-3 gap-[3px] pr-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[6px] w-[6px] rounded-[2px] bg-white"
                  />
                ))}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
