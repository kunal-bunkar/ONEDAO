export default function AuthButton({ children, type = 'button', onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded-lg bg-[#101010] py-3 text-sm font-semibold text-white transition-colors hover:bg-black ${className}`}
    >
      {children}
    </button>
  )
}
