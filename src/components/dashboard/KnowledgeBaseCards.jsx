import {
  HiOutlineChevronRight,
  HiOutlineFolder,
  HiOutlineCash,
  HiOutlineDocumentText,
  HiOutlineMusicNote,
} from 'react-icons/hi'
import { knowledgeCards } from '../../data/dashboardData'

const iconMap = {
  folder: HiOutlineFolder,
  wallet: HiOutlineCash,
  profit: HiOutlineDocumentText,
  audio: HiOutlineMusicNote,
}

export default function KnowledgeBaseCards() {
  return (
    <section className="min-w-0">
      <h2 className="mb-4 text-base font-semibold text-[#252733]">Knowledge base</h2>

      <div className="knowledge-cards-scroll">
        <div className="knowledge-cards-track">
          {knowledgeCards.map((card) => {
            const Icon = iconMap[card.icon]
            const isAudio = card.id === 'audio'

            return (
              <button
                key={card.id}
                type="button"
                className="knowledge-card"
                style={{ backgroundColor: card.bg }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={
                      isAudio ? 'knowledge-card-title--audio' : 'knowledge-card-title'
                    }
                  >
                    {card.title}
                  </span>
                </div>
                <HiOutlineChevronRight
                  className={`h-5 w-5 shrink-0 ${isAudio ? 'text-white/80' : 'text-[#9FA2B4]'}`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
