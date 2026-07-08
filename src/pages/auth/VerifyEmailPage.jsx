import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthButton from '../../components/auth/AuthButton'
import OtpInput from '../../components/auth/OtpInput'

export default function VerifyEmailPage() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <AuthLayout centered>
      <div className="mb-[clamp(12px,2vh,24px)] w-full">
        <AuthHeader
          title="Verify your email"
          subtitle="Enter the OTP from your register email id"
        />
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[clamp(10px,1.8vh,16px)]" noValidate>
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
