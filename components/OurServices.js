import {
  Baby,
  Beaker,
  Dna,
  FlaskConical,
  HeartPulse,
  Microscope,
  Snowflake,
  Stethoscope,
  TestTube,
  UsersRound,
} from "lucide-react";

const services = [
  {
    title: "IUI, IVF, ICSI",
    icon: Baby,
  },
  {
    title: "Genetic Testing",
    icon: Dna,
  },
  {
    title: "Blastocyst Transfer",
    icon: FlaskConical,
  },
  {
    title: "Cryo Preservation - Egg, Sperm & Embryos",
    icon: Snowflake,
  },
  {
    title: "TESA / PESA",
    icon: TestTube,
  },
  {
    title: "Donor Program",
    icon: UsersRound,
  },
  {
    title: "Genetic Counseling",
    icon: HeartPulse,
  },
  {
    title: "Laparoscopy & Hysteroscopy",
    icon: Microscope,
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8fbfb] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-0 h-full w-1/3 bg-[#fff1f4]" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-tl-[6rem] bg-[#dff5f1]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#e33459]">
            Our services
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Advanced fertility treatments, thoughtfully delivered.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon }, index) => (
            <article
              key={title}
              className="group relative min-h-44 overflow-hidden rounded-[1.5rem] border border-[#e6eeee] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#e33459]/25 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#dff5f1] transition duration-300 group-hover:scale-125" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#e33459] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full items-center gap-6">
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.25rem] ${
                    index % 2 === 0 ? "bg-[#fff1f4]" : "bg-[#dff5f1]"
                  } ring-1 ring-black/5 transition duration-300 group-hover:rotate-3 group-hover:scale-105`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index % 2 === 0 ? "bg-[#e33459]" : "bg-[#129b8a]"
                    } text-white shadow-lg`}
                  >
                    <Icon className="h-8 w-8" strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold leading-snug text-slate-950">
                  {title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
