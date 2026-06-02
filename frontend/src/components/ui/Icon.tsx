import { cn } from '../../utils/cn'

const uiIcons = import.meta.glob<string>('../../assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const socialIcons = import.meta.glob<string>('../../assets/icons/social/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const SOCIAL_ICON_NAMES = new Set(['facebook', 'instagram', 'youtube'])

function buildIconMap() {
  const map: Record<string, string> = {}

  for (const [path, content] of Object.entries(uiIcons)) {
    const name = path.match(/\/([^/]+)\.svg$/)?.[1]
    if (name) map[name] = content
  }

  for (const [path, content] of Object.entries(socialIcons)) {
    const name = path.match(/\/([^/]+)\.svg$/)?.[1]
    if (name) map[name] = content
  }

  return map
}

function prepareUiSvg(svg: string, size: number, className?: string) {
  return svg
    .replace(/\swidth="[^"]*"/, '')
    .replace(/\sheight="[^"]*"/, '')
    .replace(
      '<svg',
      `<svg width="${size}" height="${size}" class="${cn('inline-block shrink-0', className ?? '')}"`,
    )
}

function prepareSocialSvg(svg: string, size: number, className?: string) {
  const normalized = svg
    .replace(/<title>[^<]*<\/title>/i, '')
    .replace(/\srole="[^"]*"/i, '')
    .replace(/\sxmlns="[^"]*"/i, '')
    .replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"')

  return normalized
    .replace(/\swidth="[^"]*"/, '')
    .replace(/\sheight="[^"]*"/, '')
    .replace(
      '<svg',
      `<svg width="${size}" height="${size}" class="${cn('inline-block shrink-0', className ?? '')}"`,
    )
}

const ICON_MAP = buildIconMap()

export type IconName = keyof typeof ICON_MAP

export interface IconProps {
  name: IconName
  size?: number
  className?: string
  label?: string
}

export function Icon({ name, size = 24, className, label }: IconProps) {
  const raw = ICON_MAP[name as string]
  if (!raw) return null

  const html = SOCIAL_ICON_NAMES.has(name)
    ? prepareSocialSvg(raw, size, className)
    : prepareUiSvg(raw, size, className)

  return (
    <span
      className={cn('inline-flex', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
