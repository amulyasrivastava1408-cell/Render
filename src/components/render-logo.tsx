/** The Render mark: a rounded card with a crisp R and a lilac finishing stroke. */
export function RenderLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#2a2a27" />
      <path
        d="M11 23V9h6.5c3.1 0 4.8 1.5 4.8 4s-1.7 4-4.8 4H11"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m17 17 5.5 6" fill="none" stroke="#c9b8ff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
