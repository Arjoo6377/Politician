interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  compact?: boolean
}

export function SectionHeading({ title, subtitle, centered = true, light = false, compact = false }: SectionHeadingProps) {
  const margin = compact ? 'mb-6' : centered ? 'mb-12' : 'mb-8'
  return (
    <div className={centered ? `text-center ${margin}` : margin}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 mx-auto mb-4 ${light ? 'bg-white' : 'bg-orange-600'}`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-orange-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
