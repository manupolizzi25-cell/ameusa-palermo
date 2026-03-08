/**
 * Logo A MEUSA — vettoriale SVG, due varianti:
 *   variant="light"  → chiave e testo in oro (per navbar trasparente su foto scura)
 *   variant="dark"   → chiave e testo in teal (per navbar bianca)
 *   variant="full"   → sfondo teal + testo e chiave in oro (standalone)
 */
export default function Logo({ variant = 'light', className = '' }) {
  const gold   = '#c9a84c'
  const teal   = '#006e6a'
  const white  = '#ffffff'

  const keyColor  = variant === 'dark' ? teal   : gold
  const textColor = variant === 'dark' ? teal   : variant === 'full' ? gold : white
  const subColor  = variant === 'dark' ? '#005754' : variant === 'full' ? '#dfb733' : 'rgba(255,255,255,0.85)'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icona chiave */}
      <div
        className="flex-shrink-0 rounded-xl flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          background: variant === 'full' ? 'transparent' : variant === 'dark' ? '#f0faf9' : 'rgba(255,255,255,0.15)',
          backdropFilter: variant === 'light' ? 'blur(8px)' : undefined,
          border: variant === 'light' ? '1px solid rgba(255,255,255,0.25)' : undefined,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Chiave vintage stilizzata */}
          {/* Archetto */}
          <circle cx="9" cy="10" r="6.5" stroke={keyColor} strokeWidth="2" fill="none"/>
          <circle cx="9" cy="10" r="3.5" stroke={keyColor} strokeWidth="1.5" fill="none"/>
          {/* Gambo */}
          <line x1="14.5" y1="10" x2="27" y2="10" stroke={keyColor} strokeWidth="2" strokeLinecap="round"/>
          {/* Dentini */}
          <line x1="22" y1="10" x2="22" y2="13.5" stroke={keyColor} strokeWidth="2" strokeLinecap="round"/>
          <line x1="25" y1="10" x2="25" y2="12.5" stroke={keyColor} strokeWidth="2" strokeLinecap="round"/>
          {/* Pallino centrale archetto */}
          <circle cx="9" cy="10" r="1.2" fill={keyColor}/>
        </svg>
      </div>

      {/* Testo */}
      <div className="flex flex-col leading-none gap-0.5">
        <span
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: textColor,
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          A Meusa
        </span>
        <span
          style={{
            fontFamily: '"Palatino Linotype", Palatino, Georgia, serif',
            color: subColor,
            fontSize: '0.68rem',
            fontStyle: 'italic',
            letterSpacing: '0.08em',
            lineHeight: 1,
          }}
        >
          casa vacanze
        </span>
      </div>
    </div>
  )
}
