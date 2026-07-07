import { HiOutlineMenu, HiOutlineLogout } from 'react-icons/hi'

export default function DashboardHeader({ onMenuClick }) {
  return (
    <header className="mb-6 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="mt-1 rounded-lg p-1 text-[#252733] hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <HiOutlineMenu className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-[#252733] md:text-2xl">
            Good morning, Maharram 👋
          </h1>
          <p className="mt-1 text-sm text-[#5B6BFF]">you have 1 new message</p>
        </div>
      </div>

      <button
        type="button"
        className="rounded-lg p-2 text-[#252733] hover:bg-gray-100"
        aria-label="Logout"
      >
        <HiOutlineLogout className="h-5 w-5" />
      </button>
    </header>
  )
}
