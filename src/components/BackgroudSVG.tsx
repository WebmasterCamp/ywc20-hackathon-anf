// components/BackgroundSVG.tsx
export default function BackgroundSVG() {
  return (
    <svg
      className="fixed inset-0 w-full h-full -z-10"
      width="1512"
      height="2213"
      viewBox="0 0 1512 2213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="1512" height="2213" fill="url(#paint0_radial_80_349)" />
      <defs>
        <radialGradient
          id="paint0_radial_80_349"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(756 1106.5) rotate(90) scale(1106.5 756)"
        >
          <stop stopColor="#ABE7EF" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FCF8EC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
