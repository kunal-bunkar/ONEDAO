import { useEffect, useState } from 'react'
import authHero from '../../assets/images/auth-hero.jpg'

const AUTH_BOX = {
  height: 581,
  borderRadius: 30,
  background: '#FFFFFF',
  boxShadow: '5px 3px 20px 0px #00000066',
  desktopWidth: 780,
  mobileWidth: 390,
  imageWidth: 390,
  formWidth: 390,
  mobileBreakpoint: 640,
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < AUTH_BOX.mobileBreakpoint
  })

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < AUTH_BOX.mobileBreakpoint)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return isMobile
}

export default function AuthLayout({ children, centered = false }) {
  const isMobile = useIsMobile()
  const boxWidth = isMobile ? AUTH_BOX.mobileWidth : AUTH_BOX.desktopWidth

  return (
    <div className="auth-page">
      <div
        className="auth-box"
        style={{
          width: `min(100%, ${boxWidth}px)`,
          maxWidth: boxWidth,
          minHeight: AUTH_BOX.height,
          borderRadius: AUTH_BOX.borderRadius,
          background: AUTH_BOX.background,
          boxShadow: AUTH_BOX.boxShadow,
        }}
      >
        {!isMobile && (
          <div
            className="auth-image-panel"
            style={{
              width: AUTH_BOX.imageWidth,
              minHeight: AUTH_BOX.height,
              backgroundImage: `url(${authHero})`,
            }}
            role="img"
            aria-label="Decorative landscape"
            aria-hidden="true"
          />
        )}

        <div
          className={`auth-form-panel ${centered ? 'auth-form-panel--centered' : ''}`}
          style={{
            width: isMobile ? '100%' : AUTH_BOX.formWidth,
            minHeight: AUTH_BOX.height,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
