import Link from "next/link";
import {
  ArrowUpRight,
  Dna,
  GraduationCap,
  Mars,
  Venus,
} from "lucide-react";

const services = [
  {
    title: "Female Fertility Care",
    description: "Personalized support for ovulation, egg health, and treatment planning.",
    icon: Venus,
    tone: "from-rose-500 to-pink-400",
    glow: "bg-rose-200",
  },
  {
    title: "Male Fertility Care",
    description: "Advanced evaluation and guidance for sperm health and fertility goals.",
    icon: Mars,
    tone: "from-teal-500 to-cyan-400",
    glow: "bg-cyan-200",
  },
  {
    title: "Genetic Testing",
    description: "Clearer answers for couples through thoughtful reproductive screening.",
    icon: Dna,
    tone: "from-amber-500 to-orange-400",
    glow: "bg-amber-200",
  },
  {
    title: "Fertility Academy",
    description: "Simple, trusted education to help you make confident decisions.",
    icon: GraduationCap,
    tone: "from-indigo-500 to-violet-400",
    glow: "bg-indigo-200",
  },
];

export default function FertilityJourney() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf7] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute left-[-5rem] top-[-4rem] h-56 w-56 rounded-full bg-rose-100 blur-3xl" />
      <div className="absolute bottom-[-6rem] right-[-3rem] h-64 w-64 rounded-full bg-amber-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_2.1fr] lg:items-center">
        <div className="max-w-md">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
            Start here
          </p>

          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Begin your fertility journey with clarity.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Explore the care path that matches where you are today, then move
            forward with a team built around informed choices.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon, tone, glow }) => (
            <Link
              href="#"
              key={title}
              className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
            >
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${glow} opacity-70 blur-2xl transition duration-300 group-hover:scale-125`}
              />

              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-white shadow-lg`}
              >
                <Icon className="h-8 w-8" strokeWidth={2.2} />
              </div>

              <h3 className="relative mt-7 text-xl font-extrabold leading-tight text-slate-950">
                {title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <div className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900">
                Start now
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
