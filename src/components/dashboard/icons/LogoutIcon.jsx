export default function LogoutIcon({ className = '' }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6.5"
        y="8"
        width="18"
        height="24"
        rx="2"
        stroke="#292D32"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="20" cy="20" r="1.5" fill="#292D32" />
      <path
        d="M26 20H34M34 20L30 16M34 20L30 24"
        stroke="#5B6BFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
