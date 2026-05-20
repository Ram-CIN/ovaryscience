import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const centres = [
  "Delhi NCR",
  "Gurugram",
  "Noida",
  "Mumbai",
  "Bengaluru",
];

const otherOptions = [
  "WhatsApp Us",
  "Request Call Back",
  "Find Nearest Centre",
];

export const metadata = {
  title: "Contact Us | Ovira Science",
  description:
    "Book a fertility consultation or contact the Ovira Science care team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8fbfb] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_0.48fr]">
          <section className="rounded-2xl border border-[#e6eeee] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-9">
            <div className="rounded-xl border border-[#f3d3d9] bg-[#fff7f8] px-5 py-7 text-center">
              <h1 className="text-3xl font-black uppercase leading-tight text-slate-950 sm:text-4xl">
                <span className="text-[#e33459]">Appointment Booking</span>{" "}
                Form
              </h1>
              <p className="mt-3 text-sm font-medium text-slate-700">
                Fill in your details to schedule a confirmed consultation with
                our fertility specialists.
              </p>
            </div>

            <div className="mt-9">
              <h2 className="text-2xl font-black uppercase text-slate-950">
                Appointment Details
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Share your details and our team will contact you shortly.
              </p>
            </div>

            <form className="mt-8 grid gap-7 sm:grid-cols-2">
              <label className="block">
                <span className="text-base font-medium text-slate-950">
                  Full Name <span className="text-[#e33459]">*</span>
                </span>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="mt-3 h-12 w-full rounded border border-slate-300 bg-[#f3f6f8] px-5 text-base outline-none transition placeholder:text-slate-500 focus:border-[#e33459] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-base font-medium text-slate-950">
                  Phone Number <span className="text-[#e33459]">*</span>
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="mt-3 h-12 w-full rounded border border-slate-300 bg-[#f3f6f8] px-5 text-base outline-none transition placeholder:text-slate-500 focus:border-[#e33459] focus:bg-white"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-base font-medium text-slate-950">
                  Email Address{" "}
                  <span className="text-xs text-slate-500">(Optional)</span>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-3 h-12 w-full rounded border border-slate-300 bg-[#f3f6f8] px-5 text-base outline-none transition placeholder:text-slate-500 focus:border-[#e33459] focus:bg-white"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-base font-medium text-slate-950">
                  Select Centre{" "}
                  <span className="text-xs text-slate-500">(Optional)</span>
                </span>
                <select className="mt-3 h-12 w-full rounded border border-slate-300 bg-[#f3f6f8] px-5 text-base outline-none transition focus:border-[#e33459] focus:bg-white">
                  <option>Select nearest centre</option>
                  {centres.map((centre) => (
                    <option key={centre}>{centre}</option>
                  ))}
                </select>
              </label>

              <p className="rounded-lg border border-slate-200 bg-white px-4 py-4 text-xs leading-6 text-slate-700 sm:col-span-2">
                By submitting this form, you allow our care team to contact you
                via call, WhatsApp or email regarding your appointment.
              </p>

              <button
                type="submit"
                className="h-14 rounded-full bg-[#e33459] px-6 text-base font-bold text-white shadow-[0_16px_32px_rgba(227,52,89,0.22)] transition hover:-translate-y-1 hover:bg-[#cf2348] sm:col-span-2"
              >
                Confirm My Appointment
              </button>
            </form>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-[#e6eeee] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <h2 className="text-3xl font-black uppercase text-slate-950">
                <span className="text-[#e33459]">Quick</span> Contact
              </h2>

              <div className="mt-6 space-y-5 text-base text-slate-950">
                <a
                  href="tel:+919810350512"
                  className="flex items-center gap-3 transition hover:text-[#e33459]"
                >
                  <Phone className="h-5 w-5 text-[#e33459]" />
                  +91-9810350512
                </a>
                <a
                  href="mailto:info@ovirascience.com"
                  className="flex items-center gap-3 transition hover:text-[#e33459]"
                >
                  <Mail className="h-5 w-5 text-[#e33459]" />
                  info@ovirascience.com
                </a>
                <p className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#e33459]" />
                  Available 24/7 for urgent consultations
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-[#e6eeee] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <h2 className="text-3xl font-black uppercase text-slate-950">
                <span className="text-[#e33459]">Office</span> Hours
              </h2>

              <div className="mt-6 flex items-start gap-3 text-base text-slate-950">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-slate-950" />
                <div>
                  <p className="font-bold">Monday - Sunday:</p>
                  <p className="mt-2">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#e6eeee] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <h2 className="text-3xl font-black uppercase text-slate-950">
                <span className="text-[#e33459]">Other</span> Options
              </h2>

              <ul className="mt-6 space-y-2 text-base text-slate-950">
                {otherOptions.map((option, index) => (
                  <li key={option} className="flex items-center gap-3">
                    {index === 0 ? (
                      <MessageCircle className="h-4 w-4 text-[#e33459]" />
                    ) : (
                      <MapPin className="h-4 w-4 text-[#e33459]" />
                    )}
                    {option}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
