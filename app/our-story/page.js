import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";

const storyHighlights = [
  "Patient-first fertility guidance built around clarity and trust",
  "Advanced reproductive care delivered with emotional sensitivity",
  "Personalized treatment planning for every couple and family",
];

export const metadata = {
  title: "Our Story | Ovira Science",
  description:
    "Learn about Ovira Science, our patient-first approach, and our commitment to compassionate fertility care and advanced reproductive science.",
};

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#f8fbfb] px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-[#fff1f4]" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-tl-[6rem] bg-[#dff5f1]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
                Our story
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
                Fertility care shaped by science, empathy, and hope.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-650 sm:text-lg">
                Ovira Science was created with a simple belief: fertility care
                should feel clinically strong, emotionally supportive, and easy
                to understand. We help couples move through uncertainty with
                clear counselling, modern treatment options, and a team that
                listens closely at every step.
              </p>

              <div className="mt-8 space-y-4">
                {storyHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#129b8a]" />
                    <p className="text-base font-semibold leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e33459] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_16px_35px_rgba(227,52,89,0.24)] transition hover:-translate-y-1 hover:bg-[#cf2348]"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#dff5f1]" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
                <Image
                  alt="Ovira Science fertility care"
                  src="/about/why-choose-us.png"
                  width={900}
                  height={900}
                  className="h-[430px] w-full object-cover sm:h-[560px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <article className="rounded-[1.5rem] border border-[#e6eeee] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e33459] text-white">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-black text-slate-950">
                Compassion First
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We understand that fertility journeys can be emotionally
                demanding, so our care is built on patience, privacy, and
                reassuring communication.
              </p>
            </article>

            <article className="rounded-[1.5rem] border border-[#e6eeee] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#129b8a] text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-black text-slate-950">
                Science-Led Care
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                From evaluation to treatment planning, every recommendation is
                guided by reproductive science and each patient&apos;s medical
                needs.
              </p>
            </article>

            <article className="rounded-[1.5rem] border border-[#e6eeee] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e33459] text-white">
                <ArrowRight className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-black text-slate-950">
                Clear Next Steps
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We help patients understand their reports, options, timelines,
                and treatment choices so decisions feel informed and confident.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
