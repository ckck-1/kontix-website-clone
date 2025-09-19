"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Scroll velocity based animations
export const VelocityScale: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [scrollVelocity, setScrollVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;
    
    const updateVelocity = () => {
      const currentScrollY = scrollY.get();
      const velocity = Math.abs(currentScrollY - lastScrollY);
      setScrollVelocity(velocity);
      lastScrollY = currentScrollY;
    };

    const unsubscribe = scrollY.on("change", updateVelocity);
    return unsubscribe;
  }, [scrollY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{
        scale: 1 + (scrollVelocity * 0.01),
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

// Multi-layered parallax
export const MultiLayerParallax: React.FC<{
  layers: {
    content: React.ReactNode;
    speed: number;
    className?: string;
  }[];
  className?: string;
}> = ({ layers, className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {layers.map((layer, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, layer.speed * 100]);
        const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

        return (
          <motion.div
            key={index}
            style={{ y: smoothY }}
            className={layer.className || "absolute inset-0"}
          >
            {layer.content}
          </motion.div>
        );
      })}
    </div>
  );
};

// Scroll progress-based morphing
export const ProgressMorph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "50%", "0%"]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        borderRadius,
        rotate,
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered grid reveal
export const StaggeredGrid: React.FC<{
  children: React.ReactNode[];
  className?: string;
  gridCols?: number;
}> = ({ children, className = "", gridCols = 3 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-${gridCols} gap-4 ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 50 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Infinite scroll marquee
export const ScrollMarquee: React.FC<{
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}> = ({ children, speed = 50, direction = "left", className = "" }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const x = useTransform(
    scrollY,
    [0, 1000],
    direction === "left" ? [0, -speed] : [0, speed]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </div>
  );
};

// 3D card flip on scroll
export const ScrollFlip3D: React.FC<{
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}> = ({ frontContent, backContent, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);

  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      <motion.div
        style={{ rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          {frontContent}
        </div>
        
        {/* Back */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{ rotateY: 180 }}
        >
          {backContent}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Scroll-triggered counter with easing
export const EasedCounter: React.FC<{
  from: number;
  to: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}> = ({ from, to, className = "", suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Custom easing function
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  
  const count = useTransform(scrollYProgress, [0, 1], [from, to], {
    ease: easeOutQuart,
  });

  const rounded = useTransform(count, (value) => 
    `${prefix}${Math.round(value)}${suffix}`
  );

  return (
    <motion.div ref={ref} className={className}>
      {rounded}
    </motion.div>
  );
};

// Scroll-based image reveal
export const ImageRevealScroll: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ scale, opacity }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// Magnetic scroll effect
export const MagneticScroll: React.FC<{
  children: React.ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className = "", strength = 0.1 }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, (value) => {
    // Create a magnetic effect that pulls elements toward certain scroll positions
    const magneticPoints = [100, 300, 600, 900];
    let closestPoint = magneticPoints[0];
    let minDistance = Math.abs(value - closestPoint);
    
    magneticPoints.forEach(point => {
      const distance = Math.abs(value - point);
      if (distance < minDistance) {
        closestPoint = point;
        minDistance = distance;
      }
    });
    
    if (minDistance < 50) {
      return (closestPoint - value) * strength;
    }
    
    return 0;
  });

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: smoothY }}
    >
      {children}
    </motion.div>
  );
};