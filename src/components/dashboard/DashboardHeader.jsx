import CardChevronIcon from './icons/CardChevronIcon'
import MenuIcon from './icons/MenuIcon'
import LogoutIcon from './icons/LogoutIcon'

export default function DashboardHeader({ onMenuClick }) {
  return (
    <header className="dashboard-top mb-5">
      <div className="dashboard-top-bar">
        <button
          type="button"
          onClick={onMenuClick}
          className="dashboard-menu-btn"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>

        <div className="dashboard-top-bar-center">
          <h1 className="dashboard-greeting">
            Good morning, <em>Maharram</em>{' '}
            <span className="dashboard-wave" aria-hidden="true">
              👋
            </span>
          </h1>
          <p className="dashboard-message">you have 1 new message</p>
        </div>

        <button type="button" className="dashboard-logout-btn" aria-label="Logout">
          <LogoutIcon />
        </button>
      </div>

      <div className="dashboard-section-row">
        <h2 className="dashboard-section-title">Knowledge base</h2>
        <div className="dashboard-section-title-right">
          <h2 className="dashboard-section-title">Top Drivers</h2>
        </div>
      </div>
    </header>
  )
}
