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
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-1.5 block font-semibold text-[clamp(10px,1.2vw,12px)] leading-none uppercase text-[#101010]"
      >
        {label}
      </label>
      <div className="relative w-full">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 z-[1] h-[18px] w-[18px] -translate-y-1/2 text-[#9FA2B4] pointer-events-none" />
        )}
        <input
          id={id}
          name={name || id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          className={`relative z-0 block w-full rounded-lg border border-[#101010] bg-[#FCFDFE] py-[clamp(8px,1.2vh,10px)] text-[clamp(12px,1.4vw,14px)] leading-[120%] text-[#101010] placeholder:text-[#9FA2B4] focus:outline-none caret-[#101010]${
            Icon
              ? ' pl-10 pr-[clamp(10px,1.5vw,12px)]'
              : ' px-[clamp(10px,1.5vw,12px)]'
          }`}
        />
      </div>
    </div>
  )
}
