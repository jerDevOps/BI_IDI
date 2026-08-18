import { useEffect, useState } from 'react';

export function useAnimatedNumber(value, duration = 1000) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = currentValue;
    const change = value - startValue;
    
    if (change === 0) return;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrentValue(Math.floor(startValue + change * easeProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);

  return currentValue;
}
