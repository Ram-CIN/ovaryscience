"use client";

import Link from "next/link";
import {
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-[#f3e7d9] border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          {/* Left */}
          <div className="flex items-center gap-6 text-sm font-semibold text-black">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-500" />
              <span>info@ovirascience.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span>+91 98103 50512</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <p className="hidden text-sm font-semibold text-black md:block">
              Dr. Gauri Agarwal
            </p>

            
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-[#efefef]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="rounded-full border-2 border-red-600 p-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
                  OS
                </div>
              </div>

              <div className="ml-3">
                <h1 className="text-3xl font-bold leading-none text-red-600">
                  Ovira Science
                </h1>
              </div>
            </div>
          </Link>

          {/* MENU */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="#"
              className="flex items-center gap-1 font-semibold text-gray-900"
            >
              Resources
              <ChevronDown className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1 font-semibold text-gray-900"
            >
              About us
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1 font-semibold text-gray-900"
            >
              Doctors
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1 font-semibold text-gray-900"
            >
              Contact us
            </Link>
          </nav>

          {/* CTA BUTTON */}
          <button className="flex items-center gap-2 rounded-full bg-[#e33459] px-6 py-3 text-md font-bold text-white transition hover:bg-[#cf2348]">
            Book a Visit
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}