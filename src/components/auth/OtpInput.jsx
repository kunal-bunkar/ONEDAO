import { useRef } from 'react'

const OTP_LENGTH = 6

export default function OtpInput({ value, onChange }) {
  const inputsRef = useRef([])

  const digits = value.padEnd(OTP_LENGTH, ' ').slice(0, OTP_LENGTH).split('')

  const focusInput = (index) => {
    inputsRef.current[index]?.focus()
  }

  const handleChange = (index, inputValue) => {
    const digit = inputValue.replace(/\D/g, '').slice(-1)
    const next = digits.map((d, i) => (i === index ? digit : d === ' ' ? '' : d)).join('')
    onChange(next.replace(/\s/g, ''))

    if (digit && index < OTP_LENGTH - 1) {
      focusInput(index + 1)
    }
  }

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index].trim() && index > 0) {
      focusInput(index - 1)
    }
  }

  const handlePaste = (event) => {
    event.preventDefault()
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    onChange(pasted)
    focusInput(Math.min(pasted.length, OTP_LENGTH - 1))
  }

  return (
    <div className="auth-otp-group">
      {Array.from({ length: OTP_LENGTH }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digits[index].trim()}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          className="auth-input auth-otp-input"
        />
      ))}
    </div>
  )
}
