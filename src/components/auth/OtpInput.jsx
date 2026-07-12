import { useRef, useState } from 'react'

const OTP_LENGTH = 6

export default function OtpInput({ onChange }) {

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''))


  const inputRefs = useRef([])

  const updateOtp = (newOtp) => {
    setOtp(newOtp)
    onChange?.(newOtp.join(''))
  }

 
  const handleChange = (index, event) => {
    const value = event.target.value


    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    updateOtp(newOtp)

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, event) => {
    if (event.key !== 'Backspace') return


    if (!otp[index] && index > 0) {
      const newOtp = [...otp]
      newOtp[index - 1] = ''
      updateOtp(newOtp)
      inputRefs.current[index - 1].focus()
    }
  }

  const handlePaste = (event) => {
    event.preventDefault()

    const pastedText = event.clipboardData.getData('text')
    const numbers = pastedText.replace(/\D/g, '').slice(0, OTP_LENGTH).split('')

    const newOtp = Array(OTP_LENGTH).fill('')
    numbers.forEach((num, i) => {
      newOtp[i] = num
    })

    updateOtp(newOtp)
    inputRefs.current[Math.min(numbers.length, OTP_LENGTH) - 1]?.focus()
  }

  return (
    <div className="flex justify-center gap-[clamp(6px,1.5vw,10px)]">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          className="relative z-0 flex-shrink-0 rounded-lg border border-[#101010] bg-[#FCFDFE] p-0 text-center text-base leading-none text-[#101010] caret-[#101010] focus:outline-none w-[clamp(36px,8vw,44px)] h-[clamp(36px,8vw,44px)]"
        />
      ))}
    </div>
  )
}
