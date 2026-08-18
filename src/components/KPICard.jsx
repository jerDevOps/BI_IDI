import { motion } from 'framer-motion';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';
import { ArrowUpRight } from 'lucide-react';

export default function KPICard({ title, value, icon: Icon, color = 'var(--color-primary)', suffix = '', prefix = '', trend = null, trendLabel = '' }) {
  const animatedValue = useAnimatedNumber(value);

  return (
    <motion.div
      className="kpi-card"
      style={{ '--kpi-color': color }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(46,125,50,0.14)' }}
    >
      <div className="flex justify-between items-start" style={{ marginBottom: 12 }}>
        <h3 style={{ fontSize:'0.72rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em' }}>{title}</h3>
        <div style={{
          width:38, height:38, borderRadius:10,
          display:'flex', alignItems:'center', justifyContent:'center',
          background: `color-mix(in srgb, ${color} 12%, #f0f7f0)`,
          color: color, flexShrink:0,
        }}>
          <Icon size={19} />
        </div>
      </div>

      <div className="stat-pill">
        {prefix && <span className="stat-unit">{prefix}</span>}
        <span style={{ fontSize:'2.5rem', fontWeight:900, lineHeight:1, color, fontVariantNumeric:'tabular-nums' }}>
          {animatedValue.toLocaleString()}
        </span>
        {suffix && <span className="stat-unit">{suffix}</span>}
      </div>

      {trend !== null && (
        <div className="trend trend-up" style={{ marginTop:10, width:'fit-content' }}>
          <ArrowUpRight size={12} /> +{trend}% {trendLabel}
        </div>
      )}
    </motion.div>
  );
}
