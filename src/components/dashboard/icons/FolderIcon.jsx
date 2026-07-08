export default function FolderIcon({ color = '#3366FF', className = '' }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Back folder + tab + center dash (darker tone) */}
      <path
        d="M4.5 8.5C4.5 7.12 5.62 6 7 6h5.8c.54 0 1.05.23 1.4.63L15.4 8.1c.18.2.44.32.71.32H25c1.38 0 2.5 1.12 2.5 2.5v1.65H4.5V8.5Z"
        fill={color}
        opacity="0.55"
      />
      {/* Front pocket (brighter accent) */}
      <rect x="4.5" y="11.2" width="23" height="13.8" rx="3.2" fill={color} />
      {/* Center dash */}
      <rect x="12.5" y="17" width="7" height="2" rx="1" fill={color} opacity="0.45" />
    </svg>
  )
}
