import { CalendarDays, MapPin } from 'lucide-react'
import { Button } from '../common/Button.jsx'
import { Countdown } from '../event/Countdown.jsx'
import { EnergyMap } from '../event/EnergyMap.jsx'
import { eventConfig } from '../../config/eventConfig.js'

const eventDateLabel = '3 au 5 février 2027'

export function Hero() {
  return (
    <section
      id="accueil"
      className="page-shell grid gap-10 pb-16 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24 lg:pt-16"
    >
      <div className="space-y-8">
        <div className="space-y-5">
          <p className="eyebrow">
            <CalendarDays aria-hidden="true" size={16} strokeWidth={2.4} />
            {eventConfig.edition} · {eventDateLabel}
          </p>

          <div className="space-y-5">
            <h1 className="display-title">{eventConfig.heroTitle}</h1>
            <p className="body-large max-w-2xl">{eventConfig.heroSubtitle}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-card border border-borderSoft bg-cardWhite p-4 shadow-soft">
          <span className="mt-1 rounded-full bg-energyGreenSoft p-2 text-energyGreen">
            <MapPin aria-hidden="true" size={20} />
          </span>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-mutedText">
              Lieu
            </p>
            <p className="mt-1 font-display text-2xl font-bold leading-tight text-petrol">
              {eventConfig.venue}
            </p>
            <p className="mt-1 text-slateText">
              {eventConfig.city}, {eventConfig.country}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button className="sm:min-w-56">{eventConfig.primaryCta}</Button>
          <Button variant="secondary" className="sm:min-w-48">
            {eventConfig.secondaryCta}
          </Button>
        </div>

        <Countdown />
      </div>

      <EnergyMap />
    </section>
  )
}
