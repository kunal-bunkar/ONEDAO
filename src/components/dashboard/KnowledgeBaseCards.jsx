import { knowledgeCards } from '../../data/dashboardData'
import CardChevronIcon from './icons/CardChevronIcon'
import FolderIcon from './icons/FolderIcon'

export default function KnowledgeBaseCards() {
  return (
    <section className="min-w-0">
      <div className="relative">
        <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:thin] [scrollbar-color:#d1d5db_transparent] [&::-webkit-scrollbar]:h-[5px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d1d5db]">
          <div className="flex w-max min-w-full gap-4 pb-1">
            {knowledgeCards.map((card) => (
              <button
                key={card.id}
                type="button"
                className="flex w-[220px] min-w-[220px] h-[72px] shrink-0 items-center justify-between gap-3 border-0 rounded-2xl px-5 py-4 text-left cursor-pointer transition-transform duration-200 hover:-translate-y-px"
                style={{ backgroundColor: card.bg }}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <FolderIcon
                    color={card.accent}
                    className="w-8 h-8 shrink-0"
                  />
                  <span
                    className="font-['Montserrat'] font-medium text-base leading-6 truncate"
                    style={{ color: card.accent }}
                  >
                    {card.title}
                  </span>
                </div>
                <CardChevronIcon className="w-6 h-6 shrink-0" />
              </button>
            ))}
          </div>
        </div>
        <div
          className="absolute top-0 right-0 z-[1] w-[88px] h-full [background:linear-gradient(270deg,#ffffff_0%,rgba(255,255,255,0)_66.67%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
