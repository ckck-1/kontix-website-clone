"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export const SimpleCursor: React.FC = () => {
  // Always initialize all hooks first
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 700 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 700 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };

    // Only show cursor on desktop
    if (!isMobile()) {
      setIsVisible(true);
      document.body.classList.add('cursor-desktop-none');
    }

    const moveCursor = (e: MouseEvent) => {
      if (!isMobile()) {
        cursorX.set(e.clientX - 15);
        cursorY.set(e.clientY - 15);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Handle resize
    const handleResize = () => {
      if (isMobile()) {
        setIsVisible(false);
        document.body.classList.remove('cursor-desktop-none');
      } else {
        setIsVisible(true);
        document.body.classList.add('cursor-desktop-none');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('cursor-desktop-none');
      
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="w-full h-full rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-1 h-1 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </motion.div>
  );
};