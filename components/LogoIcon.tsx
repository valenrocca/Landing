type LogoIconProps = {
  className?: string;
  /** Unique prefix so multiple SVGs on the page do not clash on gradient ids */
  gradientIdPrefix: string;
};

export function LogoIcon({ className, gradientIdPrefix: p }: LogoIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M8 8 C8 8, 18 14, 18 20 C18 26, 8 32, 8 32 Z" fill={`url(#${p}g1)`} />
      <path d="M16 11 C16 11, 26 16, 26 20 C26 24, 16 29, 16 29 Z" fill={`url(#${p}g2)`} />
      <path d="M24 14 C24 14, 34 18, 34 20 C34 22, 24 26, 24 26 Z" fill={`url(#${p}g3)`} />
      <defs>
        <linearGradient
          id={`${p}g1`}
          x1="8"
          y1="8"
          x2="18"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E8357A" />
          <stop offset="100%" stopColor="#F5A623" />
        </linearGradient>
        <linearGradient
          id={`${p}g2`}
          x1="16"
          y1="11"
          x2="26"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F07040" />
          <stop offset="100%" stopColor="#F5A623" />
        </linearGradient>
        <linearGradient
          id={`${p}g3`}
          x1="24"
          y1="14"
          x2="34"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#FAC050" />
        </linearGradient>
      </defs>
    </svg>
  );
}
