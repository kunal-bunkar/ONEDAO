import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineIdentification,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineCollection,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineCog,
} from 'react-icons/hi'
import { menuItems } from '../../data/dashboardData'

const iconMap = {
  dashboard: HiOutlineViewGrid,
  orders: HiOutlineClipboardList,
  rides: HiOutlineTruck,
  clients: HiOutlineUserGroup,
  drivers: HiOutlineIdentification,
  shift: HiOutlineClock,
  map: HiOutlineLocationMarker,
  car: HiOutlineCollection,
  branches: HiOutlineOfficeBuilding,
  moderators: HiOutlineShieldCheck,
  settings: HiOutlineCog,
}

export default function Sidebar({ open, onClose, activeId, onSelect }) {
  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-[278px] flex-col bg-[#363740] transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/80?img=33"
              alt="Maharram"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-white">Maharram</p>
              <p className="text-xs text-[#9FA2B4]">+998 (99) 436-46-15</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto pb-8">
          <p className="mb-3 px-6 text-[10px] font-semibold tracking-wider text-[#9FA2B4] uppercase">
            Main menu
          </p>
          <ul className="sidebar-nav-list">
            {menuItems.map((item) => {
              const Icon = iconMap[item.icon]
              const isActive = activeId === item.id

              return (
                <li
                  key={item.id}
                  className={`sidebar-nav-item ${isActive ? 'sidebar-nav-item--active' : ''}`}
                >
                  <button
                    type="button"
                    className="sidebar-nav-link"
                    onClick={() => {
                      onSelect(item.id)
                      onClose?.()
                    }}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
