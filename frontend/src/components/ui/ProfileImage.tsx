import { images } from '../../data/images'
import { profile } from '../../data/staticContent'
import { cn } from '../../utils/cn'

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  bordered?: boolean
}

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-24 h-24',
  lg: 'w-60 h-60 md:w-72 md:h-72',
  xl: 'w-full max-w-md aspect-square',
}

export function ProfileImage({ size = 'md', className, bordered = false }: ProfileImageProps) {
  const hasCustomSize = Boolean(className?.match(/[!]?w-/))

  return (
    <img
      src={images.profile}
      alt={profile.name}
      className={cn(
        'object-cover object-[center_24%] rounded-full',
        !hasCustomSize && sizes[size],
        bordered && 'border-4 border-white/40 shadow-xl',
        size === 'xl' && !hasCustomSize && 'rounded-2xl object-[center_28%]',
        className
      )}
    />
  )
}
