import MenuIcon from "./icons/MenuIcon";
import LogoutIcon from "./icons/LogoutIcon";

export default function DashboardHeader({ onMenuClick }) {
  return (
    <header className="mb-5">
      <div className="flex items-center justify-between gap-4 mb-5">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex shrink-0 items-center justify-center border-0 bg-transparent p-1 cursor-pointer"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>

        <div className="flex flex-1 flex-wrap items-baseline gap-x-5 gap-y-3 min-w-0">
          <h1 className="m-0 font-['Montserrat'] font-normal text-[clamp(18px,2.2vw,24px)] leading-8 text-[#2E3A59]">
            Good morning, <em>Maharram</em>{" "}
            <span aria-hidden="true">👋</span>
          </h1>
          <p className="m-0 font-['Montserrat'] font-normal text-xs leading-4 whitespace-nowrap">
            <span className="text-[#101010]">you have </span>
            <span className="text-[#5B6BFF]">1 new message</span>
          </p>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center justify-center border-0 bg-transparent p-0 cursor-pointer"
          aria-label="Logout"
        >
          <LogoutIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4 lg:grid-cols-[1fr_minmax(280px,402px)] lg:items-center lg:gap-5">
        <h2 className="m-0 font-['Montserrat'] font-extrabold text-xl leading-7 text-[#2E3A59]">
          Knowledge base
        </h2>
        <div className="flex items-center gap-1">
          <h2 className="m-0 font-['Montserrat'] font-extrabold text-xl leading-7 text-[#2E3A59]">
            Top Drivers
          </h2>
        </div>
      </div>
    </header>
  );
}
