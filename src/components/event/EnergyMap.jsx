import { motion, useReducedMotion } from 'framer-motion'
import { eventConfig } from '../../config/eventConfig.js'

const regionalPoints = [
  { name: 'Sénégal', x: 88, y: 128 },
  { name: 'Côte d’Ivoire', x: 150, y: 222 },
  { name: 'Togo', x: 220, y: 214 },
  { name: 'Bénin', x: 244, y: 208 },
  { name: 'Nigeria', x: 318, y: 220 },
]

const cotonouHub = { name: 'Cotonou', x: 250, y: 226 }

function getLineAnimation(shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {}
  }

  return {
    strokeDashoffset: [18, 0, -18],
    transition: {
      duration: 8,
      ease: 'linear',
      repeat: Infinity,
    },
  }
}

function getPulseAnimation(shouldReduceMotion, delay = 0) {
  if (shouldReduceMotion) {
    return {}
  }

  return {
    opacity: [0.16, 0.34, 0.16],
    scale: [1, 1.55, 1],
    transition: {
      delay,
      duration: 3.8,
      ease: [0.22, 1, 0.36, 1],
      repeat: Infinity,
    },
  }
}

function getFloatingAnimation(shouldReduceMotion, delay = 0) {
  if (shouldReduceMotion) {
    return {}
  }

  return {
    y: [0, -4, 0],
    transition: {
      delay,
      duration: 5.5,
      ease: [0.22, 1, 0.36, 1],
      repeat: Infinity,
    },
  }
}

export function EnergyMap() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <aside
      className="premium-card relative overflow-hidden p-4 sm:p-6"
      aria-label="Carte énergétique abstraite de l’Afrique de l’Ouest"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(201,162,74,0.16),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(30,143,106,0.11),transparent_28%),linear-gradient(145deg,rgba(255,253,247,0.96),rgba(247,243,234,0.82))]" />
      <div className="relative min-h-[500px] overflow-hidden rounded-premium border border-borderSoft bg-ivorySoft/86 p-4 shadow-insetGold sm:min-h-[610px] sm:p-6 lg:min-h-[660px]">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="eyebrow">Carte énergétique</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-petrol sm:text-4xl">
              Hub régional de Cotonou
            </h2>
          </div>
          <span className="hidden rounded-button border border-borderSoft bg-cardWhite/86 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-mutedText sm:inline-flex">
            UEMOA
          </span>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-premium border border-borderSoft bg-cardWhite/76 p-3 shadow-soft sm:mt-8 sm:p-5">
          <svg
            className="h-[300px] w-full sm:h-[380px] lg:h-[420px]"
            viewBox="0 0 420 320"
            role="img"
            aria-labelledby="energy-map-title energy-map-description"
          >
            <title id="energy-map-title">Carte énergétique abstraite de l’Afrique de l’Ouest</title>
            <desc id="energy-map-description">
              Une plaque régionale stylisée relie le Sénégal, la Côte d’Ivoire, le Togo, le Bénin
              et le Nigeria à Cotonou comme hub central.
            </desc>

            <defs>
              <linearGradient id="regionSurface" x1="72" x2="356" y1="74" y2="260">
                <stop offset="0" stopColor="#FFFDF7" />
                <stop offset="0.58" stopColor="#F7F3EA" />
                <stop offset="1" stopColor="#DDF3EA" />
              </linearGradient>
              <filter id="softMapShadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="18" floodColor="#0B2A33" floodOpacity="0.12" stdDeviation="18" />
              </filter>
            </defs>

            <path
              d="M91 98C122 72 177 69 215 88C248 104 269 83 306 101C346 120 365 157 350 195C335 234 291 259 238 259C196 260 172 246 139 254C105 263 72 246 64 213C56 178 67 124 91 98Z"
              fill="url(#regionSurface)"
              filter="url(#softMapShadow)"
              stroke="rgba(11,42,51,0.13)"
              strokeWidth="1.4"
            />

            <path
              d="M89 116C130 101 171 104 215 126C251 144 300 134 341 158"
              fill="none"
              stroke="rgba(201,162,74,0.22)"
              strokeWidth="1"
            />
            <path
              d="M82 194C124 178 160 188 205 208C248 228 288 221 344 206"
              fill="none"
              stroke="rgba(30,143,106,0.16)"
              strokeWidth="1"
            />

            {regionalPoints
              .filter((point) => point.name !== 'Bénin')
              .map((point) => (
                <motion.path
                  key={`${point.name}-line`}
                  d={`M${point.x} ${point.y} C ${(point.x + cotonouHub.x) / 2} ${point.y - 24}, ${(point.x + cotonouHub.x) / 2} ${cotonouHub.y + 18}, ${cotonouHub.x} ${cotonouHub.y}`}
                  fill="none"
                  stroke="rgba(11,42,51,0.28)"
                  strokeDasharray="5 9"
                  strokeLinecap="round"
                  strokeWidth="1.25"
                  animate={getLineAnimation(shouldReduceMotion)}
                />
              ))}

            <motion.circle
              cx={cotonouHub.x}
              cy={cotonouHub.y}
              r="34"
              fill="rgba(201,162,74,0.18)"
              animate={getPulseAnimation(shouldReduceMotion)}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <motion.circle
              cx={cotonouHub.x}
              cy={cotonouHub.y}
              r="20"
              fill="rgba(30,143,106,0.16)"
              animate={getPulseAnimation(shouldReduceMotion, 0.7)}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />

            {regionalPoints.map((point, index) => {
              const isHubCountry = point.name === 'Bénin'

              return (
                <g key={point.name}>
                  {!isHubCountry && (
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="11"
                      fill="rgba(30,143,106,0.12)"
                      animate={getPulseAnimation(shouldReduceMotion, index * 0.28)}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                  )}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isHubCountry ? 6.5 : 4.5}
                    fill={isHubCountry ? '#C9A24A' : '#1E8F6A'}
                    stroke="#FFFDF7"
                    strokeWidth="3"
                  />
                  <text
                    x={point.x + (point.name === 'Nigeria' ? 12 : 0)}
                    y={point.y + (point.name === 'Sénégal' ? -15 : 22)}
                    fill="#475569"
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="0.5"
                    textAnchor={point.name === 'Nigeria' ? 'start' : 'middle'}
                  >
                    {point.name}
                  </text>
                </g>
              )
            })}

            <g>
              <circle
                cx={cotonouHub.x}
                cy={cotonouHub.y}
                r="8"
                fill="#0B2A33"
                stroke="#F4E7BE"
                strokeWidth="4"
              />
              <text
                x={cotonouHub.x + 15}
                y={cotonouHub.y - 12}
                fill="#0B2A33"
                fontSize="14"
                fontWeight="800"
              >
                {cotonouHub.name}
              </text>
              <text x={cotonouHub.x + 15} y={cotonouHub.y + 4} fill="#64748B" fontSize="10" fontWeight="700">
                Hub régional
              </text>
            </g>
          </svg>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {eventConfig.stats.map((stat, index) => (
            <motion.article
              key={stat}
              className="rounded-card border border-borderSoft bg-cardWhite/92 p-4 shadow-soft"
              animate={getFloatingAnimation(shouldReduceMotion, index * 0.35)}
            >
              <span
                className={`mb-3 block h-1.5 w-10 rounded-full ${
                  index % 2 === 0 ? 'bg-institutionalGold' : 'bg-energyGreen'
                }`}
              />
              <p className="text-sm font-extrabold leading-6 text-petrol">{stat}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </aside>
  )
}
