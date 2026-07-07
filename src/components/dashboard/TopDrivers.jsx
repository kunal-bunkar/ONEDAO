import { topDrivers } from '../../data/dashboardData'

export default function TopDrivers() {
  return (
    <section className="top-drivers-section">
      <ul className="top-drivers-list">
        {topDrivers.map((driver) => (
          <li key={driver.id} className="top-driver-card">
            <div className="top-driver-profile">
              <img
                src={driver.avatar}
                alt={driver.name}
                className="top-driver-avatar"
              />
              <div className="top-driver-info">
                <p className="top-driver-name">{driver.name}</p>
                <p className="top-driver-phone">{driver.phone}</p>
              </div>
            </div>

            <div className="top-driver-stats">
              <p className="top-driver-stat-row">
                <span className="top-driver-stat-label">Orders:</span>
                <span className="top-driver-stat-value top-driver-stat-value--orders">
                  {driver.orders}
                </span>
              </p>
              <p className="top-driver-stat-row top-driver-stat-row--income">
                <span className="top-driver-stat-label">Income:</span>
                <span className="top-driver-stat-value top-driver-stat-value--income">
                  $ {driver.income}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
