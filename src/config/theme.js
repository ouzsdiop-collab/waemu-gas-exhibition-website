export const colors = {
  ivory: '#F7F3EA',
  ivorySoft: '#FBF8F1',
  petrol: '#0B2A33',
  petrolLight: '#143F4A',
  energyGreen: '#1E8F6A',
  energyGreenSoft: '#DDF3EA',
  institutionalGold: '#C9A24A',
  goldSoft: '#F4E7BE',
  slateText: '#475569',
  mutedText: '#64748B',
  borderSoft: 'rgba(11, 42, 51, 0.12)',
  cardWhite: '#FFFDF7',
  danger: '#B42318',
  success: '#15803D',
}

export const radii = {
  sm: '0.625rem',
  md: '0.875rem',
  lg: '1.25rem',
  premium: '1.5rem',
  pill: '999px',
}

export const shadows = {
  premium: '0 22px 60px rgba(11, 42, 51, 0.10)',
  soft: '0 14px 40px rgba(11, 42, 51, 0.08)',
  focus: '0 0 0 4px rgba(201, 162, 74, 0.30)',
}

export const spacing = {
  pageX: 'clamp(1.25rem, 4vw, 2.5rem)',
  sectionY: 'clamp(4rem, 8vw, 7.5rem)',
  gridGap: 'clamp(1rem, 3vw, 1.5rem)',
}

export const motion = {
  duration: {
    fast: 0.16,
    base: 0.24,
    slow: 0.36,
  },
  easing: {
    premium: [0.22, 1, 0.36, 1],
    standard: [0.4, 0, 0.2, 1],
  },
}

export const theme = {
  colors,
  radii,
  shadows,
  spacing,
  motion,
}
