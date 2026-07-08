export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-[clamp(12px,2vh,20px)]">
      <h1 className="font-semibold text-[clamp(18px,2.2vw,24px)] leading-[120%] text-[#252733]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-[clamp(6px,1vh,8px)] text-[clamp(12px,1.4vw,14px)] leading-[140%] text-[#9FA2B4]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
