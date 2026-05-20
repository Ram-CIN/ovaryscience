import { Eye, HeartHandshake, Target } from "lucide-react";

const pillars = [
  "Ethical, transparent guidance at every stage",
  "Modern fertility science with compassionate support",
  "Care plans shaped around each family's journey",
];

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[5rem] bg-[#fff1f4]" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-tr-[6rem] bg-[#dff5f1]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <div className="flex flex-col justify-center rounded-[1.5rem] bg-[#f8fbfb] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
            Vision & mission
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Building hopeful futures with trusted fertility care.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            We combine clinical excellence, thoughtful counselling, and
            patient-first treatment planning to make fertility care feel clear,
            respectful, and deeply human.
          </p>

          <div className="mt-8 space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#129b8a] text-white">
                  <HeartHandshake className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#e6eeee] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#e33459]/25 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#fff1f4] transition duration-300 group-hover:scale-125" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e33459] text-white shadow-lg">
              <Eye className="h-8 w-8" strokeWidth={2.2} />
            </div>
            <h3 className="relative mt-8 text-2xl font-black text-slate-950">
              Our Vision
            </h3>
            <p className="relative mt-4 text-base leading-7 text-slate-600">
              To become a trusted fertility care partner where advanced
              reproductive science helps more families begin their parenthood
              journey with confidence and hope.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#e6eeee] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#129b8a]/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#dff5f1] transition duration-300 group-hover:scale-125" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#129b8a] text-white shadow-lg">
              <Target className="h-8 w-8" strokeWidth={2.2} />
            </div>
            <h3 className="relative mt-8 text-2xl font-black text-slate-950">
              Our Mission
            </h3>
            <p className="relative mt-4 text-base leading-7 text-slate-600">
              To deliver personalized fertility treatments through expert
              diagnosis, modern technology, clear counselling, and compassionate
              care from consultation to outcome.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
