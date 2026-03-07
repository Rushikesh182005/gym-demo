import Image from "next/image";
import Button from "../ui/Button";
import SectionTag from "../ui/SectionTag";

const heroImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Athlete training at IronForge Gym"
          fill
          priority
          className="object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-iron-700/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,75,54,0.35),_transparent_55%)]" />
      </div>

      <div className="section-max-width relative z-10 py-28">
        <div className="max-w-xl space-y-8">
          <SectionTag>High-Performance Training Facility</SectionTag>

          <div>
            <h1 className="font-display text-5xl tracking-[0.25em] text-white sm:text-6xl lg:text-7xl">
              FORGE
              <br />
              YOUR LIMITS
            </h1>
            <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
              Step into a training environment built for progress. IronForge
              combines elite coaching, intelligent programming, and a relentless
              atmosphere to push you past your plateaus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#join" className="min-w-[150px]">
              Claim Free Trial
            </Button>
            <Button variant="ghost" href="#about" className="min-w-[150px]">
              Explore Facility
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-white/60">
            <div>
              <div className="font-semibold text-white">No contracts</div>
              <div>Cancel anytime, pay monthly.</div>
            </div>
            <div>
              <div className="font-semibold text-white">
                Coaching included
              </div>
              <div>Form checks, training plans &amp; Q&amp;A.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


