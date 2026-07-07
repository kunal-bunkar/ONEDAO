export default function AuthInput({
  id,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  value,
  onChange,
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="auth-label mb-1.5 block uppercase">
        {label}
      </label>
      <div className="relative">
        
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`auth-input ${Icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  )
}
