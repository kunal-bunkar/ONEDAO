import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import {
  averageGradePoints,
  chartMonths,
  examsPoints,
} from "../../data/dashboardData";

const CHART_WIDTH = 571;
const CHART_HEIGHT = 220;
const PADDING = { top: 8, right: 4, bottom: 8, left: 4 };
const MAX_Y = 4;

function getCoordinates(points) {
  const innerW = CHART_WIDTH - PADDING.left - PADDING.right;
  const innerH = CHART_HEIGHT - PADDING.top - PADDING.bottom;

  return points.map((value, index) => ({
    x: PADDING.left + (index / (points.length - 1)) * innerW,
    y: PADDING.top + innerH - (value / MAX_Y) * innerH,
    value,
  }));
}

function buildSmoothPath(coords) {
  if (coords.length < 2) return "";

  let path = `M ${coords[0].x} ${coords[0].y}`;

  for (let i = 0; i < coords.length - 1; i += 1) {
    const p0 = coords[i - 1] || coords[i];
    const p1 = coords[i];
    const p2 = coords[i + 1];
    const p3 = coords[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return path;
}

function getMonthX(index, innerW) {
  return PADDING.left + (index / (chartMonths.length - 1)) * innerW;
}

function getHighlightStyle(index, innerW) {
  const x = getMonthX(index, innerW);
  const columnWidth = innerW / (chartMonths.length - 1);

  return {
    left: `${(x / CHART_WIDTH) * 100}%`,
    width: `${(columnWidth / CHART_WIDTH) * 100}%`,
    transform: "translateX(-50%)",
  };
}

export default function StatisticChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const avgCoords = getCoordinates(averageGradePoints);
  const examsCoords = getCoordinates(examsPoints);
  const avgPath = buildSmoothPath(avgCoords);
  const examsPath = buildSmoothPath(examsCoords);

  const innerW = CHART_WIDTH - PADDING.left - PADDING.right;
  const columnWidth = innerW / (chartMonths.length - 1);

  const handleMonthHover = (index) => setHoveredIndex(index);
  const clearMonthHover = () => setHoveredIndex(null);

  const activeExamsPoint =
    hoveredIndex !== null ? examsCoords[hoveredIndex] : null;
  const activeTooltipValue =
    hoveredIndex !== null ? examsPoints[hoveredIndex].toFixed(1) : null;

  return (
    <section className="statistic-chart">
      <div className="statistic-chart-header">
        <h2 className="statistic-chart-title">Statistic</h2>
        <div className="statistic-chart-date">
          <button
            type="button"
            className="statistic-chart-date-btn"
            aria-label="Previous month"
          >
            <HiOutlineChevronLeft className="h-4 w-4 text-[#2E3A59]" />
          </button>
          <span className="statistic-chart-date-label">Aug 2021</span>
          <button
            type="button"
            className="statistic-chart-date-btn"
            aria-label="Next month"
          >
            <HiOutlineChevronRight className="h-4 w-4 text-[#2E3A59]" />
          </button>
        </div>
      </div>

      <div className="statistic-chart-legend">
        <span className="statistic-chart-progress">Progress score</span>
        <div className="statistic-chart-legend-items">
          <span className="statistic-chart-legend-item">
            <span className="statistic-chart-dot statistic-chart-dot--blue" />
            Avarage grade
          </span>
          <span className="statistic-chart-legend-item">
            <span className="statistic-chart-dot statistic-chart-dot--green" />
            Exams
          </span>
        </div>
      </div>

      <div className="statistic-chart-plot" onMouseLeave={clearMonthHover}>
        {hoveredIndex !== null && (
          <div
            className="statistic-chart-highlight"
            style={getHighlightStyle(hoveredIndex, innerW)}
          />
        )}

        <div className="statistic-chart-plot-area">
          <svg
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
            className="statistic-chart-svg"
            preserveAspectRatio="none"
            role="img"
            aria-label="Statistic line chart"
          >
            {[0, 1, 2, 3, 4].map((tick) => {
              const y =
                PADDING.top +
                ((CHART_HEIGHT - PADDING.top - PADDING.bottom) / 4) * tick;
              return (
                <line
                  key={tick}
                  x1={PADDING.left}
                  y1={y}
                  x2={CHART_WIDTH - PADDING.right}
                  y2={y}
                  stroke="#E8EAEF"
                  strokeWidth="1"
                />
              );
            })}

            <path
              d={avgPath}
              fill="none"
              stroke="#5B6BFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={examsPath}
              fill="none"
              stroke="#39DE54"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {chartMonths.map((_, index) => {
              const x = getMonthX(index, innerW);
              return (
                <rect
                  key={`hover-${index}`}
                  x={x - columnWidth / 2}
                  y={PADDING.top}
                  width={columnWidth}
                  height={CHART_HEIGHT - PADDING.top - PADDING.bottom}
                  fill="transparent"
                  className="statistic-chart-hover-zone"
                  onMouseEnter={() => handleMonthHover(index)}
                />
              );
            })}

            {activeExamsPoint && activeTooltipValue && (
              <>
                <circle
                  cx={activeExamsPoint.x}
                  cy={activeExamsPoint.y}
                  r="5"
                  fill="#39DE54"
                />
                <circle
                  cx={activeExamsPoint.x}
                  cy={activeExamsPoint.y}
                  r="8"
                  fill="#39DE54"
                  opacity="0.2"
                />
                <g
                  transform={`translate(${activeExamsPoint.x - 22}, ${activeExamsPoint.y - 38})`}
                >
                  <rect
                    width="44"
                    height="24"
                    rx="4"
                    fill="#8791AB"
                    fillOpacity="0.88"
                  />
                  <text
                    x="22"
                    y="16"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="500"
                    fontFamily="Montserrat, sans-serif"
                  >
                    {activeTooltipValue}
                  </text>
                </g>
              </>
            )}
          </svg>
        </div>

        <div className="statistic-chart-months">
          {chartMonths.map((month, index) => (
            <button
              key={month}
              type="button"
              className={`statistic-chart-month-btn ${
                hoveredIndex === index
                  ? "statistic-chart-month-btn--active"
                  : ""
              }`}
              onMouseEnter={() => handleMonthHover(index)}
              onFocus={() => handleMonthHover(index)}
              onBlur={clearMonthHover}
            >
              {month}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
