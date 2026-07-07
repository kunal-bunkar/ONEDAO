import { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardHeader from './DashboardHeader'
import KnowledgeBaseCards from './KnowledgeBaseCards'
import StatisticChart from './StatisticChart'
import TopDrivers from './TopDrivers'
import OrdersTable from './OrdersTable'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeMenuId, setActiveMenuId] = useState('dashboard')

  return (
    <div className="dashboard-shell">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeId={activeMenuId}
        onSelect={setActiveMenuId}
      />

      <main className="dashboard-main">
        <div className="dashboard-main-inner">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <section className="dashboard-middle mb-6 lg:mb-8">
            <div className="dashboard-middle-grid">
              <div className="dashboard-middle-left">
                <KnowledgeBaseCards />
                <StatisticChart />
              </div>

              <TopDrivers />
            </div>
          </section>

          <section className="orders-table-wrap">
            <OrdersTable />
          </section>
        </div>
      </main>
    </div>
  )
}
