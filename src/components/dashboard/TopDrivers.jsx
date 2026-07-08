import { topDrivers } from '../../data/dashboardData'

export default function TopDrivers() {
  return (
    <section className="flex flex-col h-full min-h-0 lg:w-[min(402px,100%)] lg:shrink-0">
      <ul className="list-none m-0 p-0 flex flex-col gap-3 overflow-y-auto">
        {topDrivers.map((driver) => (
          <li
            key={driver.id}
            className="flex items-center justify-between gap-4 w-full max-w-[402px] h-20 px-6 py-4 rounded-lg bg-[#F7F8FC] border border-[#EDEEF2]"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <img
                src={driver.avatar}
                alt={driver.name}
                className="w-12 h-12 shrink-0 rounded object-cover bg-[#C4C4C4]"
              />
              <div className="min-w-0">
                <p className="m-0 truncate font-['Montserrat'] font-semibold text-base leading-6 text-[#2E3A59]">
                  {driver.name}
                </p>
                <p className="m-0 truncate font-['Montserrat'] font-normal text-xs leading-4 text-[#8F9BB3]">
                  {driver.phone}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end shrink-0">
              <p className="flex items-baseline gap-1.5 m-0 whitespace-nowrap">
                <span className="font-['Montserrat'] font-normal text-sm leading-5 text-[#2E3A59]">
                  Orders:
                </span>
                <span className="font-['Montserrat'] font-medium text-xl leading-7 text-[#2E3A59]">
                  {driver.orders}
                </span>
              </p>
              <p className="flex items-baseline gap-1.5 m-0 whitespace-nowrap pt-1 mt-1 border-t border-[#E4E7F0]">
                <span className="font-['Montserrat'] font-normal text-sm leading-5 text-[#2E3A59]">
                  Income:
                </span>
                <span className="font-['Montserrat'] font-semibold text-xl leading-7 text-[#2E3A59]">
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
