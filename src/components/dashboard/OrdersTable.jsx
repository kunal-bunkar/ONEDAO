import { useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { tableRows } from '../../data/dashboardData'

export default function OrdersTable() {
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(2)

  const toggleAll = () => {
    setSelected(selected.length === tableRows.length ? [] : tableRows.map((row) => row.id))
  }

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <section className="rounded-2xl border border-[#E8E9ED] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#E8E9ED] text-xs font-semibold text-[#9FA2B4] uppercase">
              <th className="px-4 py-4">
                <input
                  type="checkbox"
                  checked={selected.length === tableRows.length}
                  onChange={toggleAll}
                  className="h-4 w-4 rounded border-[#D1D5DB]"
                />
              </th>
              <th className="px-4 py-4">User</th>
              <th className="px-4 py-4">Car Comfort</th>
              <th className="px-4 py-4">Ordered Time</th>
              <th className="px-4 py-4">Start Location</th>
              <th className="px-4 py-4">Finish Location</th>
              <th className="px-4 py-4">Income</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id} className="border-b border-[#F0F1F5] text-sm last:border-b-0">
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                    className="h-4 w-4 rounded border-[#D1D5DB]"
                  />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-[#252733]">{row.name}</p>
                      <p className="text-xs text-[#9FA2B4]">{row.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-[#252733]">{row.comfort}</td>
                <td className="px-4 py-4 whitespace-nowrap text-[#252733]">{row.orderedAt}</td>
                <td className="max-w-[180px] px-4 py-4 text-xs leading-relaxed text-[#9FA2B4]">
                  {row.start}
                </td>
                <td className="max-w-[180px] px-4 py-4 text-xs leading-relaxed text-[#9FA2B4]">
                  {row.finish}
                </td>
                <td className="px-4 py-4 font-semibold whitespace-nowrap text-[#00B69B]">
                  {row.income}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#E8E9ED] px-4 py-4 text-sm text-[#9FA2B4]">
        <span>1-2 of items</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded p-1 hover:bg-gray-100"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            <HiOutlineChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPage(num)}
              className={`flex h-7 w-7 items-center justify-center rounded ${
                page === num
                  ? 'bg-[#5B6BFF] text-white'
                  : 'text-[#252733] hover:bg-gray-100'
              }`}
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            className="rounded p-1 hover:bg-gray-100"
            onClick={() => setPage((p) => Math.min(2, p + 1))}
            aria-label="Next page"
          >
            <HiOutlineChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
