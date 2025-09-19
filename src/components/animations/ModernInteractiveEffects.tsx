"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

// Custom cursor component with improved design
export const CustomCursor: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Always call hooks in the same order
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if device is mobile
    const checkIsMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };
    
    setIsMobile(checkIsMobile());
    
    const moveCursor = (e: MouseEvent) => {
      if (!checkIsMobile()) {
        cursorX.set(e.clientX - 20);
        cursorY.set(e.clientY - 20);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add hover listeners to interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
      
      return interactiveElements;
    };
    
    let interactiveElements = updateInteractiveElements();
    
    // Update interactive elements periodically
    const interval = setInterval(() => {
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      interactiveElements = updateInteractiveElements();
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(interval);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (!isMounted || isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm"
          animate={{
            scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: isHovering ? 0 : 1,
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-49"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full bg-primary/40 rounded-full"
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
        />
      </motion.div>
    </>
  );
};

// Morphing button component
export const MorphingButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-primary"
        initial={{ borderRadius: "0.5rem" }}
        animate={{
          borderRadius: isHovered ? "2rem" : "0.5rem",
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <motion.div
        className="relative z-10 px-6 py-3 text-black font-medium"
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

// Liquid shape morphing background
export const LiquidMorph: React.FC<{
  className?: string;
  colors?: string[];
}> = ({ className = "", colors = ["#f59e0b", "#d97706"] }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
        }}
        animate={{
          borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Magnetic card effect
export const MagneticCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}> = ({ children, className = "", intensity = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * intensity);
    y.set(yPct * intensity);
  }, [x, y, intensity]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// Particle explosion effect
export const ParticleExplosion: React.FC<{
  isActive: boolean;
  particleCount?: number;
  colors?: string[];
}> = ({ isActive, particleCount = 20, colors = ["#f59e0b", "#d97706", "#b45309"] }) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    angle: (360 / particleCount) * i,
    color: colors[i % colors.length],
    size: Math.random() * 6 + 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <AnimatePresence>
        {isActive && particles.map((particle) => {
          const distance = 100 + Math.random() * 100;
          const x = Math.cos((particle.angle * Math.PI) / 180) * distance;
          const y = Math.sin((particle.angle * Math.PI) / 180) * distance;

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                backgroundColor: particle.color,
                width: particle.size,
                height: particle.size,
                left: "50%",
                top: "50%",
              }}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x,
                y,
                scale: 1,
                opacity: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

// Smooth page transitions
export const PageTransition: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Loading spinner with morphing shapes
export const MorphingLoader: React.FC<{
  size?: number;
  color?: string;
}> = ({ size = 40, color = "#f59e0b" }) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
        animate={{
          borderRadius: [
            "20% 80% 80% 20%",
            "80% 20% 20% 80%",
            "20% 80% 80% 20%"
          ],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Reveal on scroll with clip path
export const ClipPathReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom" | "center";
}> = ({ children, className = "", direction = "left" }) => {
  const ref = useRef(null);
  
  const clipPaths = {
    left: {
      hidden: "inset(0 100% 0 0)",
      visible: "inset(0 0% 0 0)",
    },
    right: {
      hidden: "inset(0 0 0 100%)",
      visible: "inset(0 0 0 0%)",
    },
    top: {
      hidden: "inset(100% 0 0 0)",
      visible: "inset(0% 0 0 0)",
    },
    bottom: {
      hidden: "inset(0 0 100% 0)",
      visible: "inset(0 0 0% 0)",
    },
    center: {
      hidden: "circle(0% at 50% 50%)",
      visible: "circle(100% at 50% 50%)",
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clipPaths[direction].hidden }}
      whileInView={{ clipPath: clipPaths[direction].visible }}
      transition={{
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};