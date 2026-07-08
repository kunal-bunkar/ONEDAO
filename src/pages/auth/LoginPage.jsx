import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthInput from '../../components/auth/AuthInput'
import AuthButton from '../../components/auth/AuthButton'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <AuthHeader
        title="Log In to Admin Panel"
        subtitle="Enter your email id and password below"
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-[clamp(10px,1.8vh,16px)]" noValidate>
        <AuthInput
          id="login-email"
          name="email"
          label="Email ID"
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />

        <AuthInput
          id="login-password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />

        <div className="pt-2">
          <AuthButton type="submit">
            <span className="inline-flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faRightToBracket} className="h-4 w-4" />
              Log In
            </span>
          </AuthButton>
        </div>
      </form>

      <p className="mt-[clamp(12px,2vh,24px)] text-center text-[clamp(12px,1.4vw,14px)] leading-[140%] text-[#9FA2B4]">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="font-semibold text-[#252733] hover:underline">
          Register
        </Link>
      </p>
    </AuthLayout>
  )
}
