"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { useState, useEffect } from "react";

// Optimized wrapper that loads animations only when needed
export const OptimizedMotion = ({ children, ...props }: any) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <motion.div {...props}>
        {children}
      </motion.div>
    </LazyMotion>
  );
};

// Hook to detect if user prefers reduced motion
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
};

// Performance-aware animation variants
export const getOptimizedVariants = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0 } }
    };
  }

  return {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };
};

// Intersection observer hook for better performance
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options
    });

    setObserver(obs);

    return () => obs.disconnect();
  }, []);

  const ref = (node: Element | null) => {
    if (observer && node) {
      observer.observe(node);
    }
  };

  return { ref, isIntersecting };
};

// Optimized scroll animation component
export const ScrollOptimizedAnimation = ({ 
  children, 
  className = "",
  threshold = 0.1,
  ...motionProps 
}: any) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold });
  const prefersReducedMotion = useReducedMotion();
  
  const variants = getOptimizedVariants(prefersReducedMotion);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={variants}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};