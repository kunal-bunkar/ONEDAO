export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h1 className="auth-title">{title}</h1>
      {subtitle && <p className="auth-subtitle mt-2">{subtitle}</p>}
    </div>
  )
}
