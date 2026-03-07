import SectionTag from "../ui/SectionTag";

const programs = [
  {
    title: "Strength & Power",
    icon: "🛠️",
    description:
      "Structured barbell cycles for raw strength, focused on squats, presses, and pulls.",
    level: "All levels",
    duration: "60–75 min"
  },
  {
    title: "HIIT & Cardio",
    icon: "⚡",
    description:
      "High-intensity sessions to drive conditioning, work capacity, and fat loss.",
    level: "Intermediate",
    duration: "30–40 min"
  },
  {
    title: "Functional Fit",
    icon: "🏋️",
    description:
      "Blend of strength, kettlebells, and bodyweight to move better and feel athletic.",
    level: "All levels",
    duration: "45–60 min"
  },
  {
    title: "Combat Conditioning",
    icon: "🥊",
    description:
      "Bag work, pad drills, and conditioning circuits inspired by combat sports.",
    level: "Intermediate",
    duration: "60 min"
  },
  {
    title: "Mobility & Recovery",
    icon: "🧘",
    description:
      "Guided mobility flows, tissue work, and breathing to keep you lifting long-term.",
    level: "All levels",
    duration: "30–45 min"
  },
  {
    title: "1-on-1 Coaching",
    icon: "🤝",
    description:
      "Personalised programming, technique breakdowns, and accountability with a coach.",
    level: "Custom",
    duration: "45–75 min"
  }
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="section-max-width space-y-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="space-y-3">
        <SectionTag>Programs</SectionTag>
        <h2 className="font-display text-3xl tracking-[0.18em] sm:text-4xl">
          TRAINING THAT MEETS YOU WHERE YOU ARE.
        </h2>
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">
          Choose from focused tracks or blend programs to match your goals.
          Every session is designed with intent, clear pacing, and built-in
          progression.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.title}
            className="glass-panel flex flex-col justify-between rounded-2xl p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-iron-500/15 text-lg">
                  <span aria-hidden="true">{program.icon}</span>
                </div>
                <h3 className="text-lg font-semibold">{program.title}</h3>
              </div>
              <p className="text-sm text-white/70">{program.description}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/5 px-3 py-1 text-white/80">
                Level: {program.level}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-white/80">
                Duration: {program.duration}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


