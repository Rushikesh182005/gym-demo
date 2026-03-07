import Image from "next/image";
import SectionTag from "../ui/SectionTag";

const testimonials = [
  {
    name: "Jordan Wells",
    memberSince: "Member since 2021",
    quote:
      "IronForge is the first gym where I feel genuinely coached, not just sold a membership. My lifts and confidence have both gone through the roof.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5
  },
  {
    name: "Amira Khan",
    memberSince: "Member since 2022",
    quote:
      'The structure, the community, and the atmosphere are unmatched. I came in to "get fit" and left with a completely different standard.',
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5
  },
  {
    name: "Chris Martinez",
    memberSince: "Member since 2020",
    quote:
      "Every session feels intentional. I always know what I'm working on and why, and the coaches are there every rep of the way.",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5
  }
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-sm text-yellow-400" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-max-width space-y-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <SectionTag>Member Stories</SectionTag>
          <h2 className="font-display text-3xl tracking-[0.18em] sm:text-4xl">
            PROOF FROM THE FLOOR.
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/70 sm:text-right">
          From first-time lifters to competitive athletes, IronForge members
          share one thing in common: they&apos;re not interested in average.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="glass-panel flex flex-col justify-between rounded-2xl p-6"
          >
            <div className="space-y-4">
              <Stars count={testimonial.rating} />
              <p className="text-sm text-white/80">{testimonial.quote}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">{testimonial.name}</div>
                <div className="text-xs text-white/60">
                  {testimonial.memberSince}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


