import Image from "next/image";
import SectionTag from "../ui/SectionTag";

const aboutImage =
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80";

const features = [
  "Periodised strength & conditioning blocks",
  "Performance-focused environment",
  "Dedicated strongman & powerlifting zones",
  "Infrared recovery & mobility area",
  "Coach-led onboarding for every member",
  "Programming support via training app"
];

export default function About() {
  return (
    <section
      id="about"
      className="section-max-width py-20 sm:py-24 lg:py-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,1.2fr]">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black to-iron-800">
            <Image
              src={aboutImage}
              alt="IronForge Gym strength area"
              fill
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 -z-10 h-full w-full rounded-3xl border border-iron-500/70" />
        </div>

        <div className="space-y-8">
          <SectionTag>About IronForge</SectionTag>
          <div className="space-y-4">
            <h2 className="font-display text-3xl tracking-[0.18em] sm:text-4xl">
              BUILT FOR LIFTERS,
              <br />
              ENGINEERED FOR PROGRESS.
            </h2>
            <p className="text-sm text-white/70 sm:text-base">
              IronForge is more than a gym—it&apos;s a training ground. Every
              rack, platform, and dumbbell is chosen with performance in mind.
              No gimmicks, no fluff—just the tools and coaching you need to get
              stronger, faster, and more capable.
            </p>
            <p className="text-sm text-white/70 sm:text-base">
              Whether you&apos;re chasing your first strict pull-up or a
              600-pound deadlift, our programming, equipment, and coaching are
              dialed in to help you move with confidence and intent.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <span className="mt-1 text-iron-500" aria-hidden="true">
                  ↗
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


