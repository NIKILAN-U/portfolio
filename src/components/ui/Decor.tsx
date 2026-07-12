export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 90" fill="none" className={className} aria-hidden="true">
      <path
        className="squiggle"
        d="M4 70C22 20 40 20 50 45C60 70 78 70 88 45C98 20 116 20 134 45"
      />
    </svg>
  );
}

export function ArcRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 60C10 32.4 32.4 10 60 10C87.6 10 110 32.4 110 60"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}
