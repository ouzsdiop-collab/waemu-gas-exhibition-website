import { useEffect, useMemo, useState } from 'react'
import { eventConfig } from '../../config/eventConfig.js'

const countdownUnits = [
  { label: 'Jours', duration: 24 * 60 * 60 * 1000 },
  { label: 'Heures', duration: 60 * 60 * 1000 },
  { label: 'Minutes', duration: 60 * 1000 },
  { label: 'Secondes', duration: 1000 },
]

function getCountdownState(targetDate) {
  let remaining = targetDate.getTime() - Date.now()
  const isOpen = remaining <= 0

  if (isOpen) {
    remaining = 0
  }

  const items = countdownUnits.map((unit) => {
    const value = Math.floor(remaining / unit.duration)
    remaining -= value * unit.duration

    return { label: unit.label, value }
  })

  return { isOpen, items }
}

export function Countdown() {
  const targetDate = useMemo(() => new Date(eventConfig.startDate), [])
  const [{ isOpen, items }, setCountdownState] = useState(() => getCountdownState(targetDate))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdownState(getCountdownState(targetDate))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [targetDate])

  return (
    <section
      className="rounded-premium border border-borderSoft bg-cardWhite/90 p-4 shadow-soft sm:p-5"
      aria-label="Compte à rebours avant l’ouverture du salon"
    >
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-energyGreen">
          {isOpen ? 'L’évènement est ouvert' : 'Ouverture du salon dans'}
        </p>
        <p className="text-sm font-semibold text-mutedText">{eventConfig.openingDateLabel}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-card border border-borderSoft bg-ivorySoft px-3 py-4 text-center sm:px-4 sm:py-5"
          >
            <span className="block font-display text-4xl font-bold leading-none text-petrol sm:text-[2.65rem]">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="mt-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-mutedText sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
