"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Floating animation for cards and elements
export const FloatingElement: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  intensity?: number;
}> = ({ children, className = "", intensity = 1 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10 * intensity, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Reveal animation that grows from a line
export const RevealFromLine: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  direction?: 'horizontal' | 'vertical';
}> = ({ children, className = "", direction = 'horizontal' }) => {
  return (
    <motion.div
      className={className}
      initial={{
        scaleX: direction === 'horizontal' ? 0 : 1,
        scaleY: direction === 'vertical' ? 0 : 1,
        opacity: 0
      }}
      whileInView={{
        scaleX: 1,
        scaleY: 1,
        opacity: 1
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        opacity: { delay: 0.3 }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation with typewriter effect
export const TypewriterText: React.FC<{ 
  text: string; 
  className?: string;
  delay?: number;
}> = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            delay: delay + index * 0.03,
            duration: 0.1 
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Smooth parallax background with better performance
export const ParallaxBackground: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  speed?: number;
}> = ({ children, className = "", speed = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic hover effect
export const MagneticHover: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  intensity?: number;
}> = ({ children, className = "", intensity = 0.3 }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1 + intensity * 0.1 }}
      whileTap={{ scale: 1 - intensity * 0.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

// Progress bar animation
export const ProgressBar: React.FC<{ 
  progress: number; 
  className?: string;
  color?: string;
}> = ({ progress, className = "", color = "#f59e0b" }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
};

// Morphing shape animation
export const MorphingShape: React.FC<{ 
  className?: string;
  color?: string;
}> = ({ className = "", color = "#f59e0b" }) => {
  return (
    <motion.div
      className={`rounded-full ${className}`}
      style={{ backgroundColor: color }}
      animate={{
        borderRadius: ["50%", "20%", "50%"],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Scroll-triggered counter animation
export const AnimatedCounter: React.FC<{ 
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}> = ({ from, to, duration = 2, className = "", suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const count = useTransform(scrollYProgress, [0, 0.5], [from, to]);
  const rounded = useTransform(count, (value) => Math.round(value));

  return (
    <motion.span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

// Glowing effect animation
export const GlowEffect: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  color?: string;
}> = ({ children, className = "", color = "#f59e0b" }) => {
  return (
    <motion.div
      className={className}
      style={{
        filter: `drop-shadow(0 0 20px ${color}40)`,
      }}
      whileHover={{
        filter: `drop-shadow(0 0 30px ${color}80)`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Ripple effect
export const RippleEffect: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-white opacity-20 rounded-full scale-0"
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};