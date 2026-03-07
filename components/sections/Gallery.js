import Image from "next/image";
import SectionTag from "../ui/SectionTag";

const galleryImages = [
  // 0: athlete doing pushups
  "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    // 1: dumbbell close-up
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  // 2: gym machine
  "https://images.unsplash.com/photo-1541535881962-3bb380b08458?auto=format&fit=crop&w=900&q=80",
  // 3: another gym machine
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  // 4: wide gym environment
  // "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80"
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-max-width space-y-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <SectionTag>Inside the Forge</SectionTag>
          <h2 className="font-display text-3xl tracking-[0.18em] sm:text-4xl">
            A SPACE BUILT TO WORK.
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/70 sm:text-right">
          Heavy-duty racks, calibrated plates, turf, conditioning zones, and
          dedicated platforms—everything you need to train with intent, nothing
          that slows you down.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4 sm:grid-rows-2">
        <GalleryCard
          src={galleryImages[0]}
          alt="Athlete doing pushups at IronForge"
          className="sm:col-span-2 sm:row-span-2"
        />
        <GalleryCard
          src={galleryImages[1]}
          alt="Close-up of a dumbbell at IronForge"
          className="sm:col-span-2"
        />
        <GalleryCard
          src={galleryImages[2]}
          alt="Strength training machine at IronForge"
          className="sm:col-span-1"
        />
        <GalleryCard
          src={galleryImages[3]}
          alt="Cable machine at IronForge"
          className="sm:col-span-1 "
        />
        {/* <GalleryCard
          src={galleryImages[4]}
          alt="Wide shot of IronForge gym floor"
          className="sm:col-span-2"
        /> */}
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, className = "" }) {
  return (
    <div
      className={
        "relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 " +
        className
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale-[35%] transition duration-500 hover:scale-[1.03] hover:grayscale-0"
      />
    </div>
  );
}


