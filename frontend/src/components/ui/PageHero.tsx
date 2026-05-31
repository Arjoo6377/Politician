interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  compact?: boolean
}

export function PageHero({ title, subtitle, image, compact = false }: PageHeroProps) {
  return (
    <section
      className={`relative text-white overflow-hidden ${
        compact ? 'py-10 md:py-12' : 'py-20 md:py-24'
      }`}
    >
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-800/85 to-orange-900/90" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700" />}
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className={`font-bold ${compact ? 'text-3xl md:text-4xl mb-2' : 'text-4xl md:text-5xl mb-4'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-orange-100 max-w-2xl mx-auto ${compact ? 'text-base md:text-lg' : 'text-xl'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
