import authHero from '../../assets/images/auth-hero.jpg'

const AUTH_BOX = {
  width: 780,
  height: 581,
  borderRadius: 30,
  borderColor: '#101010',
  background: '#FFFFFF',
  boxShadow: '5px 3px 20px 0px #00000066',
  imageWidth: 390,
  formWidth: 390,
}

export default function AuthLayout({ children, centered = false }) {
  return (
    <div className="flex min-h-svh items-start justify-center overflow-x-auto bg-[#f5f5f5] px-4 pt-[139px] pb-10">
      <div
        className="flex shrink-0 overflow-hidden  bg-white"
        style={{
          width: AUTH_BOX.width,
          height: AUTH_BOX.height,
          borderRadius: AUTH_BOX.borderRadius,
          background: AUTH_BOX.background,
          boxShadow: AUTH_BOX.boxShadow,
        }}
      >
        <div
          className="h-full shrink-0 bg-cover bg-left"
          style={{
            width: AUTH_BOX.imageWidth,
            backgroundImage: `url(${authHero})`,
          }}
          role="img"
          aria-label="Decorative landscape"
        />

        <div
          className={`flex h-full shrink-0 flex-col overflow-y-auto px-10 py-9 ${
            centered ? 'items-center justify-center text-center' : 'justify-center'
          }`}
          style={{ width: AUTH_BOX.formWidth }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
