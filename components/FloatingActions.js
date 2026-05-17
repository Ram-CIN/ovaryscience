"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  MessageCircle,
  Phone,
  UserRound,
  X,
} from "lucide-react";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed right-4 bottom-0 z-40 flex -translate-y-1/2 flex-col items-end gap-3 sm:right-6">
        <a
          href="https://wa.me/919810350512"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20c86b] text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-[#18b95e]"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            className="h-7 w-7"
            width={28}
            height={28}
          />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full bg-[#db3654] px-5 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(219,54,84,0.28)] transition hover:-translate-y-1 hover:bg-[#c92d4b]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <CalendarDays className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">Book Appointment</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-[1.75rem] bg-[#fff3eb] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:p-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close appointment form"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition hover:bg-[#db3654] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#db3654]">
              Book appointment
            </p>

            <h2 className="mt-3 pr-10 text-3xl font-black text-slate-950">
              Talk to a fertility expert
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Share your details and our team will contact you shortly.
            </p>

            <form className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="relative block">
                <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white bg-white py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#db3654]"
                />
              </label>

              <label className="relative block">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-white bg-white py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#db3654]"
                />
              </label>

              <label className="relative block sm:col-span-2">
                <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="date"
                  className="w-full rounded-2xl border border-white bg-white py-4 pl-12 pr-4 text-sm text-slate-500 outline-none transition focus:border-[#db3654]"
                />
              </label>

              <textarea
                rows={4}
                placeholder="Tell us briefly how we can help"
                className="w-full resize-none rounded-2xl border border-white bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#db3654] sm:col-span-2"
              />

              <button
                type="submit"
                className="rounded-full bg-[#db3654] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#c92d4b] sm:col-span-2"
              >
                Request appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
