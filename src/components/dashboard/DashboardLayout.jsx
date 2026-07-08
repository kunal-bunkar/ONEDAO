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
    <div className="h-screen overflow-hidden bg-[#101010]">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeId={activeMenuId}
        onSelect={setActiveMenuId}
      />

      <main className="h-screen overflow-hidden ml-0 lg:ml-[276px]">
        <div className="h-full overflow-x-hidden overflow-y-auto bg-white rounded-tl-none rounded-bl-none lg:rounded-tl-[30px] lg:rounded-bl-[30px] p-[clamp(20px,3vw,40px)] pb-[clamp(24px,4vw,48px)]">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <section className="mb-6 lg:mb-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6">
              <div className="flex min-w-0 flex-col gap-4 lg:flex-1">
                <KnowledgeBaseCards />
                <StatisticChart />
              </div>

              <TopDrivers />
            </div>
          </section>

          <section className="w-full">
            <OrdersTable />
          </section>
        </div>
      </main>
    </div>
  )
}
