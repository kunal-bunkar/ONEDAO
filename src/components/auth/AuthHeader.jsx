export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-[clamp(12px,2vh,20px)]">
      <h1 className="auth-title">{title}</h1>
      {subtitle && <p className="auth-subtitle mt-[clamp(6px,1vh,8px)]">{subtitle}</p>}
    </div>
  )
}
