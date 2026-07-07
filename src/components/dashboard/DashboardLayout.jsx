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

          <section className="mb-6 lg:mb-8">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-start">
              <div className="flex min-w-0 flex-col gap-5">
                <KnowledgeBaseCards />
                <StatisticChart />
              </div>

              <TopDrivers />
            </div>
          </section>

          <section>
            <OrdersTable />
          </section>
        </div>
      </main>
    </div>
  )
}
