import { images } from '../../data/images'
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
  return (
    <img
      src={images.profile}
      alt="Profile"
      className={cn(
        'object-cover rounded-full',
        sizes[size],
        bordered && 'border-4 border-white/40 shadow-xl',
        size === 'xl' && 'rounded-2xl',
        className
      )}
    />
  )
}
