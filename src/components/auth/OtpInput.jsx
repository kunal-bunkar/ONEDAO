import { useEffect, useRef, useState } from 'react'

const OTP_LENGTH = 6

export default function OtpInput({ value = '', onChange }) {
  const [digits, setDigits] = useState(() =>
    Array.from({ length: OTP_LENGTH }, (_, i) => value[i] || ''),
  )
  const inputsRef = useRef([])

  useEffect(() => {
    const next = Array.from({ length: OTP_LENGTH }, (_, i) => value[i] || '')
    setDigits(next)
  }, [value])

  const emitChange = (nextDigits) => {
    setDigits(nextDigits)
    onChange?.(nextDigits.join(''))
  }

  const focusInput = (index) => {
    const el = inputsRef.current[index]
    if (el) {
      el.focus()
      el.select()
    }
  }

  const handleChange = (index, event) => {
    const raw = event.target.value.replace(/\D/g, '')
    if (!raw) {
      const next = [...digits]
      next[index] = ''
      emitChange(next)
      return
    }

    const chars = raw.slice(0, OTP_LENGTH - index).split('')
    const next = [...digits]

    chars.forEach((char, offset) => {
      next[index + offset] = char
    })

    emitChange(next)

    const nextFocus = Math.min(index + chars.length, OTP_LENGTH - 1)
    focusInput(nextFocus)
  }

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      event.preventDefault()
      const next = [...digits]

      if (next[index]) {
        next[index] = ''
        emitChange(next)
        return
      }

      if (index > 0) {
        next[index - 1] = ''
        emitChange(next)
        focusInput(index - 1)
      }
      return
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault()
      focusInput(index - 1)
    }

    if (event.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      event.preventDefault()
      focusInput(index + 1)
    }
  }

  const handlePaste = (event) => {
    event.preventDefault()
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!pasted) return

    const next = Array.from({ length: OTP_LENGTH }, (_, i) => pasted[i] || '')
    emitChange(next)
    focusInput(Math.min(pasted.length, OTP_LENGTH) - 1)
  }

  const handleFocus = (event) => {
    event.target.select()
  }

  return (
    <div
      className="flex justify-center gap-[clamp(6px,1.5vw,10px)]"
      role="group"
      aria-label="One-time password"
    >
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          maxLength={1}
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={handleFocus}
          aria-label={`OTP digit ${index + 1}`}
          className="relative z-0 flex-shrink-0 rounded-lg border border-[#101010] bg-[#FCFDFE] p-0 text-center text-base leading-none text-[#101010] caret-[#101010] focus:outline-none w-[clamp(36px,8vw,44px)] h-[clamp(36px,8vw,44px)]"
        />
      ))}
    </div>
  )
}
