import { ExternalLink, Globe } from 'lucide-react';

/**
 * Componente reutilizable que muestra un enlace destacado + iframe de vista previa
 * hacia una URL del portal VRI.
 */
export default function WebPreviewCard({ url, label, color = '#1565c0' }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      {/* Barra superior con link */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 18px',
        background: `linear-gradient(135deg, ${color}15, ${color}08)`,
        borderBottom: `1px solid ${color}25`,
      }}>
        <Globe size={16} style={{ color, flexShrink: 0 }} />
        <span style={{ fontSize: '0.82rem', color: '#546e7a', flex: 1, fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {url}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '6px 14px', borderRadius: 8,
            background: color, color: '#fff',
            fontSize: '0.78rem', fontWeight: 700,
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: `0 3px 10px ${color}40`,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <ExternalLink size={13} /> {label}
        </a>
      </div>

      {/* Iframe de vista previa */}
      <div style={{ position: 'relative', width: '100%', height: 780 }}>
        <iframe
          src={url}
          title={label}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
        {/* Overlay con mensaje si el iframe falla (X-Frame-Options) */}
        <div
          id="iframe-fallback"
          style={{
            display: 'none',
            position: 'absolute', inset: 0,
            background: '#f8f9fa',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}
        >
          <Globe size={40} style={{ color, opacity: 0.5 }} />
          <p style={{ color: '#546e7a', fontSize: '0.9rem', textAlign: 'center', maxWidth: 300 }}>
            El sitio no permite incrustarse en un iframe.<br />
            Usa el botón para abrir en una nueva pestaña.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px', borderRadius: 8,
              background: color, color: '#fff',
              fontSize: '0.85rem', fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <ExternalLink size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Abrir en nueva pestaña
          </a>
        </div>
      </div>
    </div>
  );
}
