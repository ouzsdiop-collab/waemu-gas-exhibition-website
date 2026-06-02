import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'
import { Button } from '../common/Button.jsx'
import { Countdown } from '../event/Countdown.jsx'
import { EnergyMap } from '../event/EnergyMap.jsx'
import { eventConfig } from '../../config/eventConfig.js'

function useHeroMotion() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    }
  }

  return {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  }
}

export function Hero() {
  const motionState = useHeroMotion()

  return (
    <section
      id="accueil"
      className="page-shell grid gap-12 pb-16 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24 lg:pt-20"
    >
      <div className="max-w-3xl space-y-9 lg:max-w-none">
        <div className="space-y-7">
          <motion.p
            className="eyebrow rounded-button border border-borderSoft bg-cardWhite/78 px-4 py-2 shadow-soft"
            initial="hidden"
            animate="visible"
            variants={motionState}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <CalendarDays aria-hidden="true" size={16} strokeWidth={2.4} />
            {eventConfig.edition} · {eventConfig.city}, {eventConfig.country} ·{' '}
            {eventConfig.dateLabel}
          </motion.p>

          <div className="space-y-6">
            <motion.h1
              className="display-title max-w-[13ch] text-[clamp(3rem,7.2vw,5.95rem)] leading-[0.96]"
              initial="hidden"
              animate="visible"
              variants={motionState}
              transition={{ delay: 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              {eventConfig.heroTitle}
            </motion.h1>

            <motion.p
              className="body-large max-w-2xl text-[clamp(1.08rem,1.6vw,1.22rem)] leading-8 text-slateText"
              initial="hidden"
              animate="visible"
              variants={motionState}
              transition={{ delay: 0.16, duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
            >
              {eventConfig.heroSubtitle}
            </motion.p>
          </div>
        </div>

        <motion.div
          className="flex items-start gap-4 rounded-card border border-borderSoft bg-cardWhite/88 p-5 shadow-soft"
          initial="hidden"
          animate="visible"
          variants={motionState}
          transition={{ delay: 0.22, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mt-1 rounded-full bg-energyGreenSoft p-2.5 text-energyGreen">
            <MapPin aria-hidden="true" size={20} />
          </span>
          <div className="space-y-1.5">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-mutedText">
              Lieu
            </p>
            <p className="font-display text-2xl font-bold leading-tight text-petrol">
              {eventConfig.venue} · {eventConfig.country}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          initial="hidden"
          animate="visible"
          variants={motionState}
          transition={{ delay: 0.3, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button className="sm:min-w-56">{eventConfig.primaryCta}</Button>
          <Button variant="secondary" className="sm:min-w-48">
            {eventConfig.secondaryCta}
          </Button>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-button px-5 py-3 text-sm font-extrabold text-slateText transition-colors duration-200 hover:bg-goldSoft hover:text-petrol sm:justify-start"
            href="#sponsors"
          >
            {eventConfig.sponsorCta}
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={motionState}
          transition={{ delay: 0.38, duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
        >
          <Countdown />
        </motion.div>
      </div>

      <EnergyMap />
    </section>
  )
}
