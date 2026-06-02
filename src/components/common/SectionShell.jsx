export function SectionShell({ children, className = '', ariaLabelledby, ...props }) {
  return (
    <section
      className={`section-shell page-shell ${className}`.trim()}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {children}
    </section>
  )
}
