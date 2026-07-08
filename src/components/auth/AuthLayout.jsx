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
    <div className="flex h-svh w-full items-center justify-center overflow-auto bg-[#f5f5f5] p-4">
      <div
        className="flex shrink-0 overflow-hidden rounded-[30px]  bg-white pointer-events-auto shadow-[5px_3px_20px_0px_#00000066]"
        style={{
          width: `min(100%, ${boxWidth}px)`,
          maxWidth: boxWidth,
          minHeight: AUTH_BOX.height,
        }}
      >
        {!isMobile && (
          <div
            className="h-auto self-stretch flex-shrink-0 bg-cover bg-no-repeat pointer-events-none"
            style={{
              width: AUTH_BOX.imageWidth,
              minHeight: AUTH_BOX.height,
              backgroundImage: `url(${authHero})`,
              backgroundPosition: 'left center',
            }}
            role="img"
            aria-label="Decorative landscape"
            aria-hidden="true"
          />
        )}

        <div
          className={`relative z-[2] flex flex-shrink-0 flex-col justify-center overflow-visible px-[clamp(20px,4vw,40px)] py-[clamp(24px,4vh,36px)] pointer-events-auto${centered ? ' items-center text-center' : ''}`}
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
