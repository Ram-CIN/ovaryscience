import {
  CalendarDays,
  Dna,
  GraduationCap,
  Mars,
  Phone,
  UserRound,
  Venus,
} from "lucide-react";

const faqCategories = [
  {
    title: "Female frequently asked questions",
    icon: Venus,
    color: "text-[#df3b59]",
  },
  {
    title: "Male frequently asked questions",
    icon: Mars,
    color: "text-[#53b9bb]",
  },
  {
    title: "Genetic frequently asked questions",
    icon: Dna,
    color: "text-[#f3b52d]",
  },
  {
    title: "Learning frequently asked questions",
    icon: GraduationCap,
    color: "text-slate-500",
  },
];

export default function FaqAppointment() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-8 top-28 hidden opacity-60 lg:block">
        <div className="relative h-80 w-40">
          <div className="absolute left-16 top-0 h-52 w-px rotate-[-18deg] bg-[#f7ddd5]" />
          <div className="absolute left-10 top-4 h-16 w-8 rotate-[-45deg] rounded-full bg-[#fbeae4]" />
          <div className="absolute left-3 top-16 h-16 w-8 rotate-[-55deg] rounded-full bg-[#fbeae4]" />
          <div className="absolute left-14 top-24 h-16 w-8 rotate-[-28deg] rounded-full bg-[#fbeae4]" />
          <div className="absolute left-0 top-36 h-16 w-8 rotate-[-45deg] rounded-full bg-[#fbeae4]" />
          <div className="absolute left-16 top-44 h-16 w-8 rotate-[-20deg] rounded-full bg-[#fbeae4]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-[0.08em] text-slate-900 sm:text-3xl">
            <span className="text-[#db3654]">Have any questions?</span>{" "}
            Our experts are happy to guide you.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="grid gap-5">
            {faqCategories.map(({ title, icon: Icon, color }) => (
              <article
                key={title}
                className="flex min-h-28 items-center gap-6 rounded-[1.4rem] border border-[#f1ebe5] bg-[#fffdf9] px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              >
                <Icon className={`h-11 w-11 shrink-0 ${color}`} strokeWidth={1.8} />
                <h3 className="max-w-xs text-lg font-extrabold uppercase leading-snug text-slate-900">
                  {title}
                </h3>
              </article>
            ))}
          </div>

          <div className="rounded-[1.75rem] bg-[#fff3eb] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#db3654]">
              Book appointment
            </p>

            <h3 className="mt-3 text-3xl font-black text-slate-950">
              Talk to a fertility expert
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Share your details and our care team will reach out to help you
              choose the right next step.
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
                className="sm:col-span-2 w-full resize-none rounded-2xl border border-white bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#db3654]"
              />

              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-[#db3654] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#c92d4b]"
              >
                Request appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
