import { eventConfig } from '../../config/eventConfig.js'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-borderSoft bg-ivory/90 backdrop-blur">
      <nav className="page-shell flex min-h-20 items-center justify-between gap-6 py-4" aria-label="Navigation principale">
        <a className="focus-ring rounded-md" href="#accueil" aria-label="Retour à l’accueil">
          <span className="block font-display text-xl font-bold leading-none text-petrol sm:text-2xl">
            {eventConfig.shortName}
          </span>
          <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-mutedText">
            {eventConfig.edition}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex" aria-label="Liens de navigation">
          {eventConfig.navigation.slice(0, 4).map((item) => (
            <a
              key={item}
              className="focus-ring rounded-button px-1 py-2 text-sm font-bold text-slateText transition-colors duration-200 hover:text-petrol"
              href={item === 'Accueil' ? '#accueil' : '#'}
            >
              {item}
            </a>
          ))}
        </div>

        <a className="premium-button focus-ring px-5 py-3 text-sm" href="#invitation">
          {eventConfig.primaryCta}
        </a>
      </nav>
    </header>
  )
}
