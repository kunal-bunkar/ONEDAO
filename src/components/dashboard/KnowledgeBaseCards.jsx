import {
  HiOutlineFolder,
  HiOutlineCash,
  HiOutlineDocumentText,
  HiOutlineMusicNote,
} from 'react-icons/hi'
import { knowledgeCards } from '../../data/dashboardData'
import CardChevronIcon from './icons/CardChevronIcon'

const iconMap = {
  folder: HiOutlineFolder,
  wallet: HiOutlineCash,
  profit: HiOutlineDocumentText,
  audio: HiOutlineMusicNote,
}

export default function KnowledgeBaseCards() {
  return (
    <section className="min-w-0">
      <div className="knowledge-cards-wrapper">
        <div className="knowledge-cards-scroll">
          <div className="knowledge-cards-track">
            {knowledgeCards.map((card) => {
              const Icon = iconMap[card.icon]

              return (
                <button
                  key={card.id}
                  type="button"
                  className="knowledge-card"
                  style={{ backgroundColor: card.bg }}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon
                      className="knowledge-card-icon shrink-0"
                      style={{ color: card.accent }}
                    />
                    <span
                      className="knowledge-card-title truncate"
                      style={{ color: card.accent }}
                    >
                      {card.title}
                    </span>
                  </div>
                  <CardChevronIcon className="knowledge-card-chevron shrink-0" />
                </button>
              )
            })}
          </div>
        </div>
        <div className="knowledge-cards-fade" aria-hidden="true" />
      </div>
    </section>
  )
}
