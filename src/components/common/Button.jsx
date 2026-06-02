import { forwardRef } from 'react'

const variantClasses = {
  primary: 'premium-button px-6 py-3',
  secondary: 'premium-button-secondary px-6 py-3',
  ghost:
    'focus-ring inline-flex min-h-12 items-center justify-center rounded-button px-5 py-3 font-extrabold text-petrol transition-colors duration-200 hover:bg-energyGreenSoft',
}

export const Button = forwardRef(function Button(
  { children = 'Continuer', variant = 'primary', className = '', type = 'button', ...props },
  ref,
) {
  const classes = variantClasses[variant] ?? variantClasses.primary

  return (
    <button ref={ref} type={type} className={`${classes} focus-ring ${className}`.trim()} {...props}>
      {children}
    </button>
  )
})
