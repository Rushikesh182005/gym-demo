const stats = [
  { label: "Members", value: "12K+" },
  { label: "Weekly Classes", value: "85+" },
  { label: "Elite Trainers", value: "40+" },
  { label: "Access", value: "24/7" }
];

export default function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-black/40">
      <div className="section-max-width flex flex-col items-center justify-between gap-6 py-6 text-xs uppercase tracking-[0.2em] text-white/60 sm:flex-row">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className="h-px w-8 bg-iron-500" />
            <div>
              <div className="text-sm font-semibold text-white sm:text-base">
                {stat.value}
              </div>
              <div>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


