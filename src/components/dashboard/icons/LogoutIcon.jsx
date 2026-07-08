import logoutIcon from '../../../assets/images/logout-icon.png'

export default function LogoutIcon({ className = '' }) {
  return (
    <img
      src={logoutIcon}
      alt=""
      className={`block w-10 h-10 object-contain ${className}`}
      width={40}
      height={40}
    />
  )
}
