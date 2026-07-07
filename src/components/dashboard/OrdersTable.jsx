import { useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { tableRows } from '../../data/dashboardData'

export default function OrdersTable() {
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(1)

  const toggleAll = () => {
    setSelected(selected.length === tableRows.length ? [] : tableRows.map((row) => row.id))
  }

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <section className="orders-table-section">
      <div className="orders-table-scroll">
        <table className="orders-table">
          <thead>
            <tr>
              <th className="orders-table-th orders-table-th--check">
                <input
                  type="checkbox"
                  checked={selected.length === tableRows.length && tableRows.length > 0}
                  onChange={toggleAll}
                  className="orders-table-checkbox"
                  aria-label="Select all rows"
                />
              </th>
              <th className="orders-table-th">User</th>
              <th className="orders-table-th">Car Comfort</th>
              <th className="orders-table-th">Ordered Time</th>
              <th className="orders-table-th">Start Location</th>
              <th className="orders-table-th">Finish Location</th>
              <th className="orders-table-th">Income</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id} className="orders-table-row">
                <td className="orders-table-td orders-table-td--check">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                    className="orders-table-checkbox"
                    aria-label={`Select ${row.name}`}
                  />
                </td>
                <td className="orders-table-td">
                  <div className="orders-table-user">
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="orders-table-avatar"
                    />
                    <div className="orders-table-user-info">
                      <p className="orders-table-user-name">{row.name}</p>
                      <p className="orders-table-user-phone">{row.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="orders-table-td">
                  <span className="orders-table-cell-text">{row.comfort}</span>
                </td>
                <td className="orders-table-td">
                  <span className="orders-table-cell-text orders-table-cell-text--nowrap">
                    {row.orderedAt}
                  </span>
                </td>
                <td className="orders-table-td">
                  <span className="orders-table-cell-text orders-table-cell-text--location">
                    {row.start}
                  </span>
                </td>
                <td className="orders-table-td">
                  <span className="orders-table-cell-text orders-table-cell-text--location">
                    {row.finish}
                  </span>
                </td>
                <td className="orders-table-td">
                  <span className="orders-table-income">{row.income}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orders-table-pagination">
        <span className="orders-table-pagination-text">1-2 of items</span>
        <div className="orders-table-pagination-controls">
          <button
            type="button"
            className="orders-table-page-btn orders-table-page-btn--arrow orders-table-page-btn--disabled"
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
              className={`orders-table-page-btn ${
                page === num ? 'orders-table-page-btn--active' : ''
              }`}
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            className="orders-table-page-btn orders-table-page-btn--arrow"
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
