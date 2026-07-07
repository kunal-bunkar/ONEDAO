export default function AuthButton({ children, type = 'button', onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`auth-button ${className}`}
    >
      {children}
    </button>
  )
}
