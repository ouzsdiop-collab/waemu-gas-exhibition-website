import { motion } from 'framer-motion'
import { CheckCircle2, CircleDotDashed } from 'lucide-react'
import { Button } from './components/common/Button.jsx'
import { SectionShell } from './components/common/SectionShell.jsx'
import { eventConfig } from './config/eventConfig.js'
import { colors } from './config/theme.js'

const colorLabels = [
  ['Ivoire', colors.ivory],
  ['Ivoire doux', colors.ivorySoft],
  ['Pétrole', colors.petrol],
  ['Pétrole clair', colors.petrolLight],
  ['Vert énergie', colors.energyGreen],
  ['Vert énergie doux', colors.energyGreenSoft],
  ['Or institutionnel', colors.institutionalGold],
  ['Or doux', colors.goldSoft],
  ['Texte ardoise', colors.slateText],
  ['Texte discret', colors.mutedText],
  ['Carte blanche', colors.cardWhite],
  ['Succès', colors.success],
]

function App() {
  return (
    <main className="min-h-screen bg-ivory text-petrol">
      <SectionShell className="space-y-12">
        <motion.header
          className="max-w-4xl space-y-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">
            <CircleDotDashed aria-hidden="true" size={16} strokeWidth={2.4} />
            Base graphique française
          </p>
          <div className="space-y-4">
            <h1 className="display-title">{eventConfig.shortName}</h1>
            <p className="body-large max-w-3xl">
              Design system initialisé pour un prototype institutionnel clair, premium et
              accessible dédié au gaz naturel dans l’espace UEMOA.
            </p>
          </div>
        </motion.header>

        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]" aria-labelledby="apercu-tokens">
          <div className="premium-card p-5 sm:p-7">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Palette officielle</p>
                <h2 id="apercu-tokens" className="section-title mt-3 text-3xl sm:text-4xl">
                  Couleurs et tokens
                </h2>
              </div>
              <span className="rounded-button bg-energyGreenSoft px-4 py-2 text-sm font-bold text-energyGreen">
                Variables prêtes
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {colorLabels.map(([label, value]) => (
                <article
                  key={label}
                  className="rounded-card border border-borderSoft bg-ivorySoft p-3"
                  aria-label={`${label} : ${value}`}
                >
                  <div
                    className="h-16 rounded-md border border-borderSoft"
                    style={{ background: value }}
                  />
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                    <strong>{label}</strong>
                    <span className="font-mono text-xs text-mutedText">{value}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="premium-card flex flex-col justify-between gap-8 p-5 sm:p-7">
            <div className="space-y-4">
              <p className="eyebrow">Carte premium</p>
              <h2 className="section-title text-3xl sm:text-4xl">Fondation sobre et lisible</h2>
              <p className="text-slateText">
                Les styles globaux préparent les futures sections avec une hiérarchie claire,
                des contrastes maîtrisés et des états de focus visibles.
              </p>
            </div>

            <div className="rounded-card border border-borderSoft bg-ivorySoft p-4">
              <div className="flex items-start gap-3">
                <span className="rounded-full bg-goldSoft p-2 text-petrol">
                  <CheckCircle2 aria-hidden="true" size={20} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    Accessibilité préparée
                  </h3>
                  <p className="mt-2 text-sm text-slateText">
                    Focus visible, réduction des mouvements et structure responsive sont intégrés
                    dès cette base.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="premium-card p-5 sm:p-7" aria-labelledby="apercu-boutons">
          <div className="mb-6 space-y-3">
            <p className="eyebrow">Composants communs</p>
            <h2 id="apercu-boutons" className="section-title text-3xl sm:text-4xl">
              Aperçu des boutons
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button>{eventConfig.primaryCta}</Button>
            <Button variant="secondary">{eventConfig.sponsorCta}</Button>
            <Button variant="ghost">Consulter les informations</Button>
          </div>
        </section>
      </SectionShell>
    </main>
  )
}

export default App
