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
} from "react-icons/hi";
import { menuItems } from "../../data/dashboardData";

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
};

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
        className={`fixed top-0 left-0 z-50 flex h-screen w-[276px] flex-col bg-[#101010] transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
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
          <ul className="list-none m-0 p-0">
            {menuItems.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = activeId === item.id;

              return (
                <li
                  key={item.id}
                  className={`relative mb-[2px] pl-4${
                    isActive
                      ? " before:content-[''] before:absolute before:right-0 before:top-[-24px] before:w-6 before:h-6 before:pointer-events-none before:z-[1] before:rounded-br-[24px] before:[box-shadow:8px_8px_0_8px_#ffffff] after:content-[''] after:absolute after:right-0 after:bottom-[-24px] after:w-6 after:h-6 after:pointer-events-none after:z-[1] after:rounded-tr-[24px] after:[box-shadow:8px_-8px_0_8px_#ffffff]"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    className={`flex w-full items-center gap-3 border-0 px-5 py-3 font-['Montserrat'] text-sm font-semibold leading-none cursor-pointer transition-colors duration-200${
                      isActive
                        ? " relative z-[2] rounded-[100px_0_0_100px] bg-white text-[#5459EA]"
                        : " bg-transparent text-white"
                    }`}
                    onClick={() => {
                      onSelect(item.id);
                      onClose?.();
                    }}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
