export default function AuthButton({ children, type = 'button', onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full cursor-pointer rounded-lg border-none bg-[#101010] px-4 py-[clamp(10px,1.5vh,12px)] font-semibold text-[clamp(12px,1.4vw,14px)] leading-none text-white transition-colors duration-200 hover:bg-black ${className}`.trim()}
    >
      {children}
    </button>
  )
}
