"use client";

import Link from "next/link";
import {
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const resourceLinks = [
  { label: "IVF Process", href: "/#ivf-process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Patient Testimonial", href: "/#patient-testimonial" },
  { label: "Facts", href: "/#facts" },
  { label: "Blogs", href: "/blog" },
];

const aboutLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Vision Mission", href: "/vision-mission" },
];

function NavDropdown({ label, links }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 font-semibold text-gray-900 transition hover:text-[#e33459]">
        {label}
        <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
      </button>

      <div className="invisible absolute left-0 top-full z-50 mt-4 min-w-64 translate-y-2 rounded-2xl border border-[#e6eeee] bg-white p-2 opacity-0 shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="absolute -top-4 left-0 h-4 w-full" />
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#fff1f4] hover:text-[#e33459]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

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
            {/* <p className="hidden text-sm font-semibold text-black md:block">
              Dr. Gauri Agarwal
            </p> */}

            
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
              href="/#services"
              className="flex items-center gap-1 font-semibold text-gray-900"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>

            <NavDropdown label="Resources" links={resourceLinks} />

            <NavDropdown label="About us" links={aboutLinks} />

            <Link
              href="/contact"
              className="flex items-center gap-1 font-semibold text-gray-900"
            >
              Contact us
            </Link>
          </nav>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-[#e33459] px-6 py-3 text-md font-bold text-white transition hover:bg-[#cf2348]"
          >
            Book a Visit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
