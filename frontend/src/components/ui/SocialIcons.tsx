import { Icon, type IconProps } from './Icon'

type SocialIconProps = Omit<IconProps, 'name'>

export function FacebookIcon(props: SocialIconProps) {
  return <Icon name="facebook" label="Facebook" {...props} />
}

export function InstagramIcon(props: SocialIconProps) {
  return <Icon name="instagram" label="Instagram" {...props} />
}

export function YoutubeIcon(props: SocialIconProps) {
  return <Icon name="youtube" label="YouTube" {...props} />
}

export function TwitterIcon(props: SocialIconProps) {
  return <Icon name="twitter" label="X (Twitter)" {...props} />
}

export function LinkedInIcon(props: SocialIconProps) {
  return <Icon name="linkedin" label="LinkedIn" {...props} />
}
