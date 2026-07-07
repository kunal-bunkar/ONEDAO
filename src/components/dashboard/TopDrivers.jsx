import { HiOutlineChevronRight } from "react-icons/hi";
import { topDrivers } from "../../data/dashboardData";

export default function TopDrivers() {
  return (
    <section className="flex h-full min-h-[420px] flex-col rounded-2xl border border-[#E8E9ED] bg-white p-5 lg:min-h-0">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#252733]">Top Drivers</h2>
        <button
          type="button"
          className="rounded p-1 hover:bg-gray-100"
          aria-label="View all drivers"
        >
          <HiOutlineChevronRight className="h-5 w-5 text-[#9FA2B4]" />
        </button>
      </div>

      <ul className="space-y-3 overflow-y-auto">
        {topDrivers.map((driver) => (
          <li
            key={driver.id}
            className="flex items-center justify-between gap-3 border-b border-[#F0F1F5] pb-3 last:border-b-0 last:pb-0"
          >
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={driver.avatar}
                alt={driver.name}
                className="h-10 w-10 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#252733]">
                  {driver.name}
                </p>
                <p className="truncate text-xs text-[#9FA2B4]">
                  {driver.phone}
                </p>
              </div>
            </div>
            <div className="shrink-0 text-right text-xs">
              <p className="text-[#9FA2B4]">
                Orders:{" "}
                <span className="font-medium text-[#252733]">
                  {driver.orders}
                </span>
              </p>
              <p className="text-[#9FA2B4]">
                Income:{" "}
                <span className="font-medium text-[#252733]">
                  $ {driver.income}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
