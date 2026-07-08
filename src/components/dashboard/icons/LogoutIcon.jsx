import logoutIcon from '../../../assets/images/logout-icon.png'

export default function LogoutIcon({ className = '' }) {
  return (
    <img
      src={logoutIcon}
      alt=""
      className={`dashboard-logout-icon ${className}`}
      width={40}
      height={40}
    />
  )
}
