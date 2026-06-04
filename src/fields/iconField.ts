import type { Field } from 'payload'

/**
 * Shared icon picker. Each value maps to an inline SVG rendered by the
 * <Icon /> component on the frontend (src/components/icon.tsx).
 */
export const ICON_OPTIONS = [
  { label: 'Truck', value: 'truck' },
  { label: 'Network', value: 'network' },
  { label: 'Route', value: 'route' },
  { label: 'Clipboard / Audit', value: 'clipboard' },
  { label: 'Search / Insight', value: 'search' },
  { label: 'Shield / Trust', value: 'shield' },
  { label: 'Refresh / Optimize', value: 'refresh' },
  { label: 'Chart / Growth', value: 'chart' },
  { label: 'Compass / Strategy', value: 'compass' },
  { label: 'Handshake / Partnership', value: 'handshake' },
  { label: 'Layers / Scale', value: 'layers' },
  { label: 'Anchor / Reliability', value: 'anchor' },
] as const

export const iconField: Field = {
  name: 'icon',
  type: 'select',
  defaultValue: 'compass',
  options: [...ICON_OPTIONS],
  admin: {
    description: 'Icon shown next to this item.',
  },
}
