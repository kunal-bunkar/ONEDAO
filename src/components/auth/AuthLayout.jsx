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
  viewportPadding: 32,
}

function useResponsiveAuthBox() {
  const [state, setState] = useState(() => getLayoutState())

  useEffect(() => {
    const onResize = () => setState(getLayoutState())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return state
}

function getLayoutState() {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      boxWidth: AUTH_BOX.desktopWidth,
      scale: 1,
      scaledWidth: AUTH_BOX.desktopWidth,
      scaledHeight: AUTH_BOX.height,
    }
  }

  const isMobile = window.innerWidth < AUTH_BOX.mobileBreakpoint
  const boxWidth = isMobile ? AUTH_BOX.mobileWidth : AUTH_BOX.desktopWidth
  const availableWidth = window.innerWidth - AUTH_BOX.viewportPadding
  const availableHeight = window.innerHeight - AUTH_BOX.viewportPadding
  const scale = Math.min(1, availableWidth / boxWidth, availableHeight / AUTH_BOX.height)

  return {
    isMobile,
    boxWidth,
    scale,
    scaledWidth: boxWidth * scale,
    scaledHeight: AUTH_BOX.height * scale,
  }
}

export default function AuthLayout({ children, centered = false }) {
  const { isMobile, boxWidth, scale, scaledWidth, scaledHeight } = useResponsiveAuthBox()

  return (
    <div className="auth-page">
      <div
        className="auth-scale-host"
        style={{ width: scaledWidth, height: scaledHeight }}
      >
        <div
          className="auth-box"
          style={{
            width: boxWidth,
            height: AUTH_BOX.height,
            borderRadius: AUTH_BOX.borderRadius,
            background: AUTH_BOX.background,
            boxShadow: AUTH_BOX.boxShadow,
            transform: `scale(${scale})`,
          }}
        >
          {!isMobile && (
            <div
              className="auth-image-panel"
              style={{
                width: AUTH_BOX.imageWidth,
                backgroundImage: `url(${authHero})`,
              }}
              role="img"
              aria-label="Decorative landscape"
            />
          )}

          <div
            className={`auth-form-panel ${centered ? 'auth-form-panel--centered' : ''}`}
            style={{ width: AUTH_BOX.formWidth }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
