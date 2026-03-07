export default function SectionTag({ children }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-iron-500">
      <span className="h-px w-8 bg-iron-500" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}


