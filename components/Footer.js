import Link from "next/link";
// import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";

// const socialLinks = [
//   {
//     label: "Facebook",
//     href: "#",
//     icon: Facebook,
//     tone: "bg-[#db3654]",
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: Youtube,
//     tone: "bg-[#53b9bb]",
//   },
//   {
//     label: "LinkedIn",
//     href: "#",
//     icon: Linkedin,
//     tone: "bg-[#f3b52d]",
//   },
//   {
//     label: "Instagram",
//     href: "#",
//     icon: Instagram,
//     tone: "bg-slate-700",
//   },
// ];

export default function Footer() {
  return (
    <footer className="bg-[#fff3eb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr_0.7fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="rounded-full border-2 border-[#db3654] p-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#db3654] font-bold text-white">
                OS
              </div>
            </div>

            <div>
              <p className="text-2xl font-black leading-none text-[#db3654]">
                Ovira Science
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                Fertility care
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Compassionate fertility guidance, advanced reproductive science, and
            personalized care for every family journey.
          </p>
        </div>

        <div className="grid gap-5 text-sm text-slate-700 sm:grid-cols-2">
          <div>
            <p className="font-extrabold text-slate-950">Open Hours</p>
            <p className="mt-2 leading-7">Mon - Sun: 9:00 a.m. - 7:00 p.m.</p>

            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#db3654]" />
              <p className="leading-7">
                Available across multiple cities in India. Find your nearest
                fertility centre with our care team.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-extrabold text-slate-950">Contact</p>

            <Link
              href="tel:+919810350512"
              className="flex items-center gap-3 transition hover:text-[#db3654]"
            >
              <Phone className="h-4 w-4 text-[#db3654]" />
              <span>+91 98103 50512</span>
            </Link>

            <Link
              href="mailto:info@ovirascience.com"
              className="flex items-center gap-3 transition hover:text-[#db3654]"
            >
              <Mail className="h-4 w-4 text-[#db3654]" />
              <span>info@ovirascience.com</span>
            </Link>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <p className="font-extrabold text-slate-950">Follow us</p>

          {/* <div className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, tone }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 ${tone}`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div> */}
        </div>
      </div>

      <div className="bg-[#db3654] px-4 py-5 text-center text-sm font-semibold text-white">
        Copyright © 2026 Ovira Science. All Rights Reserved.
      </div>
    </footer>
  );
}
