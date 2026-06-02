import { Icon, type IconProps } from './Icon'

type SocialIconProps = Omit<IconProps, 'name'> & {
  name: 'facebook' | 'instagram' | 'youtube'
}

export function FacebookIcon(props: Omit<SocialIconProps, 'name'>) {
  return <Icon name="facebook" label="Facebook" {...props} />
}

export function InstagramIcon(props: Omit<SocialIconProps, 'name'>) {
  return <Icon name="instagram" label="Instagram" {...props} />
}

export function YoutubeIcon(props: Omit<SocialIconProps, 'name'>) {
  return <Icon name="youtube" label="YouTube" {...props} />
}
