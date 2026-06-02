import { MapPin } from 'lucide-react'
import { eventConfig } from '../../config/eventConfig.js'

export function EnergyMap() {
  return (
    <aside
      className="premium-card relative overflow-hidden p-5 sm:p-7"
      aria-label="Aperçu de la carte énergétique UEMOA"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(201,162,74,0.20),transparent_28%),linear-gradient(135deg,rgba(221,243,234,0.72),rgba(255,253,247,0.88))]" />
      <div className="relative min-h-[420px] rounded-card border border-borderSoft bg-ivorySoft/80 p-5 sm:min-h-[520px] sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Carte énergétique</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-petrol">
              Espace UEMOA
            </h2>
          </div>
          <span className="rounded-button border border-borderSoft bg-cardWhite px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-mutedText">
            Placeholder
          </span>
        </div>

        <div className="mt-10 grid min-h-72 place-items-center rounded-premium border border-dashed border-[rgba(11,42,51,0.22)] bg-cardWhite/70 p-6 text-center shadow-insetGold">
          <div className="max-w-sm space-y-4">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-goldSoft text-petrol">
              <MapPin aria-hidden="true" size={26} strokeWidth={2.2} />
            </span>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold leading-tight text-petrol">
                Visualisation premium à venir
              </h3>
              <p className="text-sm leading-7 text-slateText">
                Cette zone accueillera la future carte énergétique du salon, avec un rendu sobre
                et institutionnel centré sur {eventConfig.city}.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-borderSoft bg-cardWhite p-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-mutedText">Pays membres</p>
            <p className="mt-2 font-display text-2xl font-bold text-petrol">8 pays UEMOA</p>
          </div>
          <div className="rounded-card border border-borderSoft bg-cardWhite p-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-mutedText">Lieu central</p>
            <p className="mt-2 font-display text-2xl font-bold text-petrol">{eventConfig.city}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
