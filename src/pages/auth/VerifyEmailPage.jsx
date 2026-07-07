import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthButton from '../../components/auth/AuthButton'
import OtpInput from '../../components/auth/OtpInput'

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <AuthLayout centered>
      <div className="mb-[clamp(12px,2vh,24px)] w-full">
        <div className="mb-[clamp(8px,1.5vh,12px)] flex justify-center text-[#252733]">
          <MdOutlineMarkEmailRead className="h-[clamp(28px,5vw,36px)] w-[clamp(28px,5vw,36px)]" />
        </div>
        <AuthHeader
          title="Verify your email"
          subtitle="Enter the OTP from your register email id"
        />
      </div>

      <form onSubmit={handleSubmit} className="auth-form w-full">
        <OtpInput value={otp} onChange={setOtp} />

        <AuthButton type="submit">
          <span className="inline-flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" />
            Proceed
          </span>
        </AuthButton>
      </form>
    </AuthLayout>
  )
}
