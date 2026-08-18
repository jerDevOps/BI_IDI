import { motion } from 'framer-motion';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';

export default function KPICard({ title, value, icon: Icon, color = 'var(--color-primary)', suffix = '', prefix = '' }) {
  const animatedValue = useAnimatedNumber(value);

  return (
    <motion.div 
      className="card kpi-card"
      style={{ '--kpi-color': color }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-secondary">{title}</h3>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center" 
          style={{ background: `color-mix(in srgb, ${color} 15%, transparent)`, color: color }}
        >
          <Icon size={20} />
        </div>
      </div>
      
      <div className="stat-pill">
        {prefix && <span className="stat-unit">{prefix}</span>}
        <span className="stat-number">{animatedValue.toLocaleString()}</span>
        {suffix && <span className="stat-unit">{suffix}</span>}
      </div>
    </motion.div>
  );
}
