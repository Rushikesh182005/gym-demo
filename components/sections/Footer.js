export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="section-max-width grid gap-8 py-10 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div>
            <div className="font-display text-lg tracking-[0.35em]">
              IRONFORGE
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">
              Gym
            </div>
          </div>
          <p>
            A performance-driven gym in the heart of the city, built for
            lifters, athletes, and anyone tired of settling for average.
          </p>
          <div className="flex gap-3 text-xs text-white/50">
            <a
              href="#"
              className="hover:text-white"
            >
              Instagram
            </a>
            <span>·</span>
            <a
              href="#"
              className="hover:text-white"
            >
              Facebook
            </a>
            <span>·</span>
            <a
              href="#"
              className="hover:text-white"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Navigate
          </h3>
          <ul className="space-y-1.5">
            <li>
              <a
                href="#about"
                className="hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#programs"
                className="hover:text-white"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-white"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-white"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Programs
          </h3>
          <ul className="space-y-1.5">
            <li>Strength &amp; Power</li>
            <li>HIIT &amp; Cardio</li>
            <li>Functional Fit</li>
            <li>Combat Conditioning</li>
            <li>Mobility &amp; Recovery</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Contact
          </h3>
          <p>
            1450 Forge Lane
            <br />
            District 7, Iron City
          </p>
          <p>
            <a
              href="tel:+15551234567"
              className="hover:text-white"
            >
              (555) 123-4567
            </a>
            <br />
            <a
              href="mailto:train@ironforgegym.com"
              className="hover:text-white"
            >
              train@ironforgegym.com
            </a>
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} IronForge Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


