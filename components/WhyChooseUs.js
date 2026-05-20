import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

const reasons = [
  "Trusted fertility care with a patient-first approach",
  "Experienced specialists guiding every treatment step",
  "Advanced reproductive science with modern lab support",
  "Personalized plans designed around each couple",
  "Transparent counselling and compassionate communication",
  "A growing care network built on clinical excellence",
];

export default function WhyChooseUs() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-10 hidden h-80 w-40 opacity-70 lg:block">
        <div className="absolute left-8 top-0 h-16 w-8 rotate-[-35deg] rounded-full bg-rose-100" />
        <div className="absolute left-2 top-14 h-16 w-8 rotate-[-45deg] rounded-full bg-rose-100" />
        <div className="absolute left-10 top-28 h-16 w-8 rotate-[-25deg] rounded-full bg-rose-100" />
        <div className="absolute left-3 top-[10.5rem] h-16 w-8 rotate-[-40deg] rounded-full bg-rose-100" />
        <div className="absolute left-12 top-56 h-16 w-8 rotate-[-25deg] rounded-full bg-rose-100" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#fff1ed]" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_70px_rgba(15,23,42,0.14)]">
            <Image
              alt="Pregnant woman holding baby shoes"
              src="/about/why-choose-us.png"
              width={900}
              height={900}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
            Why choose us
          </p>

          <h2 className="max-w-xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Fertility care that feels expert, warm, and deeply personal.
          </h2>

          <div className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e33459] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>

                <p className="text-base leading-7 text-slate-700">{reason}</p>
              </div>
            ))}
          </div>

          <Link
            href="tel:+919810350512"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e33459] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_16px_35px_rgba(227,52,89,0.28)] transition hover:-translate-y-1 hover:bg-[#cf2348]"
          >
            <Phone className="h-4 w-4" />
            Call us
          </Link>
        </div>
      </div>
    </section>
  );
}
