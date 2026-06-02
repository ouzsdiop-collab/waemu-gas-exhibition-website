import { useEffect, useMemo, useState } from 'react'
import { eventConfig } from '../../config/eventConfig.js'

const units = [
  ['jours', 24 * 60 * 60 * 1000],
  ['heures', 60 * 60 * 1000],
  ['minutes', 60 * 1000],
  ['secondes', 1000],
]

function getRemainingTime(targetDate) {
  let remaining = Math.max(targetDate.getTime() - Date.now(), 0)

  return units.map(([label, duration]) => {
    const value = Math.floor(remaining / duration)
    remaining -= value * duration

    return { label, value }
  })
}

export function Countdown() {
  const targetDate = useMemo(() => new Date(eventConfig.startDate), [])
  const [items, setItems] = useState(() => getRemainingTime(targetDate))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setItems(getRemainingTime(targetDate))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [targetDate])

  return (
    <section
      className="rounded-card border border-borderSoft bg-cardWhite p-4 shadow-soft"
      aria-label="Compte à rebours avant l’ouverture du salon"
    >
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-energyGreen">
          Ouverture du salon
        </p>
        <p className="text-sm font-semibold text-mutedText">3 février 2027</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-borderSoft bg-ivorySoft px-3 py-4 text-center"
          >
            <span className="block font-display text-3xl font-bold leading-none text-petrol sm:text-4xl">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="mt-2 block text-xs font-bold uppercase tracking-[0.12em] text-mutedText">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
