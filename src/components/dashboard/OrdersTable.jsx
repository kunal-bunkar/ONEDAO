import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { tableRows } from "../../data/dashboardData";

export default function OrdersTable() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const toggleAll = () => {
    setSelected(
      selected.length === tableRows.length
        ? []
        : tableRows.map((row) => row.id),
    );
  };

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full min-h-[371px] border border-[#F0F0F0] rounded-lg bg-white overflow-hidden">
      <div className="overflow-x-auto w-full">
        <table className="w-max min-w-full [border-collapse:separate] [border-spacing:0] table-auto">
          <thead>
            <tr className="bg-[#F7F8FC]">
              <th className="w-[52px] min-w-[52px] pl-5 pr-3 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={
                    selected.length === tableRows.length && tableRows.length > 0
                  }
                  onChange={toggleAll}
                  className="w-[13px] h-[13px] m-0 border border-[#D4D4D4] rounded-sm bg-white cursor-pointer accent-[#5459EA]"
                  aria-label="Select all rows"
                />
              </th>
              <th className="min-w-[200px] px-5 pr-7 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                User
              </th>
              <th className="min-w-[110px] px-7 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                Car Comfort
              </th>
              <th className="min-w-[140px] px-7 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                Ordered Time
              </th>
              <th className="w-[180px] min-w-[180px] max-w-[180px] px-7 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                Start Location
              </th>
              <th className="w-[180px] min-w-[180px] max-w-[180px] px-7 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                Finish Location
              </th>
              <th className="min-w-[130px] pl-7 pr-5 py-3.5 font-['Montserrat'] font-semibold text-xs leading-none text-[#505470] text-left align-middle whitespace-nowrap">
                Income
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id} className="bg-white">
                <td className="w-[52px] min-w-[52px] pl-5 pr-3 py-3.5 align-middle">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                    className="w-[13px] h-[13px] m-0 border border-[#D4D4D4] rounded-sm bg-white cursor-pointer accent-[#5459EA]"
                    aria-label={`Select ${row.name}`}
                  />
                </td>
                <td className="min-w-[200px] px-5 pr-7 py-3.5 align-middle whitespace-nowrap">
                  <div className="flex items-center gap-2.5 min-w-max">
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="w-[37px] h-[37px] shrink-0 rounded-full object-cover bg-[#E5E5E5]"
                    />
                    <div className="min-w-0">
                      <p className="m-0 mb-1 whitespace-nowrap font-['Poppins'] font-normal text-xs leading-none text-[#192A3E]">
                        {row.name}
                      </p>
                      <p className="m-0 whitespace-nowrap font-['Poppins'] font-medium text-[10px] leading-none tracking-[0.01em] text-[#90A0B7]">
                        {row.phone}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="min-w-[110px] px-7 py-3.5 align-middle whitespace-nowrap">
                  <span className="inline-block font-['Poppins'] font-medium text-[10px] leading-none text-[#192A3E] align-middle whitespace-nowrap">
                    {row.comfort}
                  </span>
                </td>
                <td className="min-w-[140px] px-7 py-3.5 align-middle whitespace-nowrap">
                  <span className="inline-block font-['Poppins'] font-medium text-[10px] leading-none text-[#192A3E] align-middle whitespace-nowrap">
                    {row.orderedAt}
                  </span>
                </td>
                <td className="w-[180px] min-w-[180px] max-w-[180px] px-7 py-3.5 align-middle">
                  <span className="inline-block font-['Poppins'] font-medium text-[10px] leading-none text-[#192A3E] align-middle w-full max-w-[180px] line-clamp-2 break-words">
                    {row.start}
                  </span>
                </td>
                <td className="w-[180px] min-w-[180px] max-w-[180px] px-7 py-3.5 align-middle">
                  <span className="inline-block font-['Poppins'] font-medium text-[10px] leading-none text-[#192A3E] align-middle w-full max-w-[180px] line-clamp-2 break-words">
                    {row.finish}
                  </span>
                </td>
                <td className="min-w-[130px] pl-7 pr-5 py-3.5 align-middle whitespace-nowrap">
                  <span className="inline-block px-2 py-1 rounded-full bg-[rgba(57,222,84,0.2)] font-['Poppins'] font-medium text-[9px] leading-none text-[#24C18F] whitespace-nowrap">
                    {row.income}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3 px-5 py-4">
        <span className="font-['Poppins'] font-normal text-xs leading-none text-[#505470]">
          1-2 of items
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="flex w-[27px] h-[27px] items-center justify-center border border-[#E0E0E0] rounded-[3px] bg-white font-['Poppins'] font-medium text-xs leading-none text-[#192A3E] opacity-40 cursor-not-allowed transition-colors duration-150"
            disabled
            aria-label="Previous page"
          >
            <HiOutlineChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPage(num)}
              className={`flex w-[27px] h-[27px] items-center justify-center border rounded-[3px] font-['Poppins'] font-medium text-xs leading-none cursor-pointer transition-colors duration-150 hover:border-[#5459EA]${
                page === num
                  ? " border-[#5459EA] bg-[#5459EA] text-white"
                  : " border-[#E0E0E0] bg-white text-[#192A3E]"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            className="flex w-[27px] h-[27px] items-center justify-center border border-[#E0E0E0] rounded-[3px] bg-white font-['Poppins'] font-medium text-xs leading-none text-[#192A3E] cursor-pointer transition-colors duration-150 hover:border-[#5459EA]"
            onClick={() => setPage((p) => Math.min(2, p + 1))}
            aria-label="Next page"
          >
            <HiOutlineChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
