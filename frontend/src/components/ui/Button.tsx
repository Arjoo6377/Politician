import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
}

const variants = {
  primary: 'bg-orange-600 text-white hover:bg-orange-700 shadow-md',
  secondary: 'bg-orange-700 text-white hover:bg-orange-800 shadow-md',
  outline: 'border-2 border-orange-600 text-orange-700 hover:bg-orange-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export function Button({ variant = 'primary', size = 'md', className, to, children, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
