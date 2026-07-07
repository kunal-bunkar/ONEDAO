import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import {
  averageGradePoints,
  chartMonths,
  examsPoints,
} from '../../data/dashboardData'

const CHART_WIDTH = 620
const CHART_HEIGHT = 240
const PADDING = { top: 24, right: 20, bottom: 32, left: 30 }
const MAX_Y = 4
const HIGHLIGHT_INDEX = 7

function getCoordinates(points) {
  const innerW = CHART_WIDTH - PADDING.left - PADDING.right
  const innerH = CHART_HEIGHT - PADDING.top - PADDING.bottom

  return points.map((value, index) => ({
    x: PADDING.left + (index / (points.length - 1)) * innerW,
    y: PADDING.top + innerH - (value / MAX_Y) * innerH,
    value,
  }))
}

function buildSmoothPath(coords) {
  if (coords.length < 2) return ''

  let path = `M ${coords[0].x} ${coords[0].y}`

  for (let i = 0; i < coords.length - 1; i += 1) {
    const p0 = coords[i - 1] || coords[i]
    const p1 = coords[i]
    const p2 = coords[i + 1]
    const p3 = coords[i + 2] || p2

    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
  }

  return path
}

export default function StatisticChart() {
  const avgCoords = getCoordinates(averageGradePoints)
  const examsCoords = getCoordinates(examsPoints)
  const avgPath = buildSmoothPath(avgCoords)
  const examsPath = buildSmoothPath(examsCoords)

  const innerW = CHART_WIDTH - PADDING.left - PADDING.right
  const highlightX =
    PADDING.left + (HIGHLIGHT_INDEX / (chartMonths.length - 1)) * innerW
  const highlightValue = averageGradePoints[HIGHLIGHT_INDEX]
  const highlightY = avgCoords[HIGHLIGHT_INDEX].y

  return (
    <section className="flex min-w-0 flex-1 flex-col rounded-2xl border border-[#E8E9ED] bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-[#252733]">Statistic</h2>
        <div className="flex items-center gap-2 text-sm text-[#252733]">
          <button
            type="button"
            className="rounded p-1 hover:bg-gray-100"
            aria-label="Previous month"
          >
            <HiOutlineChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-medium">Aug 2021</span>
          <button
            type="button"
            className="rounded p-1 hover:bg-gray-100"
            aria-label="Next month"
          >
            <HiOutlineChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#9FA2B4]">
        <span className="font-medium text-[#252733]">Progress score</span>
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#5B6BFF]" />
            Average grade
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#4FD1C5]" />
            Exams
          </span>
        </div>
      </div>

      <div className="relative w-full min-w-0 flex-1">
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Statistic line chart"
        >
          {[0, 1, 2, 3, 4].map((tick) => {
            const y =
              PADDING.top +
              ((CHART_HEIGHT - PADDING.top - PADDING.bottom) / 4) * tick
            return (
              <line
                key={tick}
                x1={PADDING.left}
                y1={y}
                x2={CHART_WIDTH - PADDING.right}
                y2={y}
                stroke="#F0F1F5"
                strokeWidth="1"
              />
            )
          })}

          <rect
            x={highlightX - 14}
            y={PADDING.top}
            width={28}
            height={CHART_HEIGHT - PADDING.top - PADDING.bottom}
            fill="#E8E9ED"
            opacity="0.55"
            rx="2"
          />

          <path
            d={examsPath}
            fill="none"
            stroke="#4FD1C5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={avgPath}
            fill="none"
            stroke="#5B6BFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx={highlightX} cy={highlightY} r="4" fill="#5B6BFF" />
          <circle cx={highlightX} cy={highlightY} r="7" fill="#5B6BFF" opacity="0.2" />

          <g transform={`translate(${highlightX - 18}, ${highlightY - 36})`}>
            <rect width="36" height="22" rx="4" fill="#9FA2B4" />
            <text
              x="18"
              y="15"
              textAnchor="middle"
              fill="#fff"
              fontSize="11"
              fontWeight="600"
            >
              {highlightValue.toFixed(1)}
            </text>
          </g>

          {chartMonths.map((month, index) => {
            const x = PADDING.left + (index / (chartMonths.length - 1)) * innerW
            return (
              <text
                key={month}
                x={x}
                y={CHART_HEIGHT - 10}
                textAnchor="middle"
                fill="#9FA2B4"
                fontSize="11"
              >
                {month}
              </text>
            )
          })}
        </svg>
      </div>
    </section>
  )
}
