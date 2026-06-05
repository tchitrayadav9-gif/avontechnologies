import FadeIn from './FadeIn'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <FadeIn className={`mb-12 max-w-3xl ${alignClass}`}>
      {badge && (
        <span
          className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light
              ? 'bg-white/10 text-cyan-200'
              : 'bg-primary/10 text-primary'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-text'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
