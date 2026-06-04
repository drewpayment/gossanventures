import type { IconName } from '@/lib/types'

const paths: Record<IconName, React.ReactNode> = {
  truck: (
    <>
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5V16H3V7.5Z" />
      <path d="M15 9h3.2a1.5 1.5 0 0 1 1.3.75L21 12.5V16h-6V9Z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.5 7.4 11 16M16.5 7.4 13 16M8 6h8" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 5a3 3 0 0 1 6 0" />
      <path d="M8.5 13.5 11 16l4.5-5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4.5L4 8" />
      <path d="M4 4v4h4" />
      <path d="M4 13a8 8 0 0 0 14 4.5L20 16" />
      <path d="M20 20v-4h-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 4-4 4 2 3-1 3 3" />
      <path d="m21 11-3 3-3-3-2 2a1.5 1.5 0 0 1-2-2l3-3" />
      <path d="m3 11 3 3 2.5-2.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="6" r="2" />
      <path d="M12 8v12" />
      <path d="M5 12a7 7 0 0 0 14 0" />
      <path d="M8 11H5m14 0h-3" />
    </>
  ),
}

interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.compass}
    </svg>
  )
}
