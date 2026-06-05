import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

const TEAL = '#1C5F6E'
const TEAL_2 = '#2E7A85'
const INK = '#102F36'
const SEAFOAM_SOFT = '#E4F2F1'
const SEAFOAM = '#9FD0CE'
const SUNRISE = '#EAD78A'
const CLOUD = '#FBFAF6'

/**
 * Fetch a Google font as TTF/OTF for Satori (which can't read woff2).
 * Using a legacy User-Agent makes the CSS API return truetype URLs.
 * Returns null on any failure so the OG image still renders with defaults.
 */
async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`
    const css = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1)' },
    }).then((r) => r.text())
    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)
    if (!match) return null
    return await fetch(match[1]).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

type FontEntry = { name: string; data: ArrayBuffer; weight: 400 | 600; style: 'normal' }
let fontCache: FontEntry[] | null = null

async function loadFonts(): Promise<FontEntry[]> {
  if (fontCache) return fontCache
  const [display, sans] = await Promise.all([
    loadGoogleFont('Fraunces', 600),
    loadGoogleFont('Inter', 600),
  ])
  const fonts: FontEntry[] = []
  if (display) fonts.push({ name: 'Fraunces', data: display, weight: 600, style: 'normal' })
  if (sans) fonts.push({ name: 'Inter', data: sans, weight: 600, style: 'normal' })
  fontCache = fonts
  return fonts
}

function Emblem() {
  return (
    <svg width={84} height={84} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="46" fill={SEAFOAM_SOFT} stroke={TEAL} strokeWidth="3" />
      <circle cx="36" cy="46" r="9" fill={SUNRISE} />
      <rect x="12" y="52" width="76" height="2.5" fill={TEAL} />
      <rect x="64" y="43" width="3" height="23" fill={INK} />
      <polygon points="65,21 82,52 48,52" fill={TEAL} />
      <polygon points="65,31 78,52 52,52" fill={TEAL_2} />
    </svg>
  )
}

export async function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const fonts = await loadFonts()
  const titleSize = title.length > 70 ? 48 : title.length > 44 ? 56 : 66

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: CLOUD,
          padding: '72px',
          fontFamily: 'Inter',
        }}
      >
        {/* decorative */}
        <div
          style={{
            position: 'absolute',
            top: -190,
            right: -150,
            width: 560,
            height: 560,
            borderRadius: 560,
            backgroundColor: SEAFOAM,
            opacity: 0.28,
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 630, backgroundColor: TEAL }} />

        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Emblem />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 30, letterSpacing: 4, color: INK }}>GOSSAN</div>
            <div style={{ fontSize: 14, letterSpacing: 6, color: TEAL }}>VENTURES LLC</div>
          </div>
        </div>

        {/* main */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 980 }}>
          <div style={{ fontSize: 26, letterSpacing: 3, color: TEAL }}>{eyebrow.toUpperCase()}</div>
          <div style={{ fontSize: titleSize, lineHeight: 1.05, color: INK, fontFamily: 'Fraunces' }}>{title}</div>
        </div>

        {/* footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 24, color: 'rgba(16,47,54,0.6)' }}>Logistics &amp; Supply Chain Advisory</div>
          <div style={{ fontSize: 24, color: TEAL }}>gossanventures.com</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: fonts.length ? fonts : undefined },
  )
}
