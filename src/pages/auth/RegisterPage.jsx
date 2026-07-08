import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthInput from '../../components/auth/AuthInput'
import AuthButton from '../../components/auth/AuthButton'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/verify-email')
  }

  return (
    <AuthLayout>
      <AuthHeader
        title="Register to Admin Panel"
        subtitle="Enter your phone number and password below"
      />

      <form onSubmit={handleSubmit} className="auth-form auth-form--compact" noValidate>
        <AuthInput
          id="register-email"
          name="email"
          label="Email ID"
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />

        <AuthInput
          id="register-password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
        />

        <AuthInput
          id="register-confirm-password"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Enter your confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          autoComplete="new-password"
        />

        <div className="pt-2">
          <AuthButton type="submit">
            <span className="inline-flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faUserPlus} className="h-4 w-4" />
              Register
            </span>
          </AuthButton>
        </div>
      </form>

      <p className="auth-footer mt-[clamp(10px,1.8vh,20px)] text-center">
        Already have an account?{' '}
        <Link to="/login" className="auth-footer-link hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}
