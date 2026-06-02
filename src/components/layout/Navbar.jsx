import { useEffect, useId, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { eventConfig } from '../../config/eventConfig.js'

const navigationTargets = {
  Accueil: '#accueil',
  Programme: '#programme',
  Intervenants: '#intervenants',
  Inscription: '#inscription',
  Sponsors: '#sponsors',
  Contact: '#contact',
}

function getNavigationTarget(item) {
  return navigationTargets[item] ?? `#${item.toLowerCase()}`
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(11,42,51,0.10)] bg-ivory/92 shadow-[0_1px_0_rgba(255,255,255,0.70)] backdrop-blur-md">
      <nav
        className="page-shell flex min-h-24 items-center justify-between gap-5 py-4 lg:gap-8"
        aria-label="Navigation principale"
      >
        <a
          className="focus-ring shrink-0 rounded-md py-1"
          href="#accueil"
          aria-label="Retour à l’accueil"
          onClick={closeMobileMenu}
        >
          <span className="block font-display text-xl font-bold leading-none text-petrol sm:text-2xl">
            {eventConfig.shortName}
          </span>
          <span className="mt-1.5 block text-xs font-extrabold uppercase tracking-[0.18em] text-mutedText">
            {eventConfig.edition}
          </span>
        </a>

        <div className="hidden min-w-0 items-center justify-center gap-1 rounded-button border border-borderSoft bg-cardWhite/72 px-2 py-2 lg:flex">
          {eventConfig.navigation.map((item) => (
            <a
              key={item}
              className="focus-ring rounded-button px-3 py-2 text-sm font-extrabold text-slateText transition-colors duration-200 hover:bg-energyGreenSoft hover:text-petrol xl:px-4"
              href={getNavigationTarget(item)}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            className="premium-button focus-ring hidden px-5 py-3 text-sm md:inline-flex"
            href="#invitation"
          >
            {eventConfig.primaryCta}
          </a>

          <button
            className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-borderSoft bg-cardWhite text-petrol shadow-soft transition-colors duration-200 hover:bg-ivorySoft lg:hidden"
            type="button"
            aria-label={isMobileMenuOpen ? 'Fermer le menu principal' : 'Ouvrir le menu principal'}
            aria-controls={mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? (
              <X aria-hidden="true" size={22} strokeWidth={2.2} />
            ) : (
              <Menu aria-hidden="true" size={22} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </nav>

      <div
        id={mobileMenuId}
        className={`fixed inset-x-0 bottom-0 top-24 z-40 overflow-y-auto bg-ivory/96 backdrop-blur-md transition duration-200 lg:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="page-shell py-5">
          <div className="rounded-premium border border-borderSoft bg-cardWhite p-4 shadow-premium">
            <p className="mb-4 px-4 text-xs font-extrabold uppercase tracking-[0.18em] text-mutedText">
              Menu principal
            </p>

            <div className="grid gap-2" aria-label="Menu mobile">
              {eventConfig.navigation.map((item) => (
                <a
                  key={item}
                  className="focus-ring flex items-center justify-between rounded-card px-4 py-3 text-base font-extrabold text-petrol transition-colors duration-200 hover:bg-energyGreenSoft"
                  href={getNavigationTarget(item)}
                  tabIndex={isMobileMenuOpen ? undefined : -1}
                  onClick={closeMobileMenu}
                >
                  <span>{item}</span>
                  <span className="text-sm font-bold text-mutedText" aria-hidden="true">
                    —
                  </span>
                </a>
              ))}
            </div>

            <a
              className="premium-button focus-ring mt-4 w-full px-5 py-3 text-sm"
              href="#invitation"
              tabIndex={isMobileMenuOpen ? undefined : -1}
              onClick={closeMobileMenu}
            >
              {eventConfig.primaryCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
