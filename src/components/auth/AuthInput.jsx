export default function AuthInput({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  value,
  onChange,
  autoComplete,
  required = false,
}) {
  return (
    <div className="auth-field">
      <label htmlFor={id} className="auth-label mb-1.5 block uppercase">
        {label}
      </label>
      <div className="auth-input-wrap">
        
        <input
          id={id}
          name={name || id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          className={`auth-input ${Icon ? 'auth-input--with-icon' : ''}`}
        />
      </div>
    </div>
  )
}
