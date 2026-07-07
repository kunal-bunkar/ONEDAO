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
      <div className="mb-6 w-full">
        <div className="mb-3 flex justify-center text-[#252733]">
          <MdOutlineMarkEmailRead className="h-9 w-9" />
        </div>
        <AuthHeader
          title="Verify your email"
          subtitle="Enter the OTP from your register email id"
        />
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
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
