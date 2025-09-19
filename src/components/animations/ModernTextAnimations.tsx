"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Split text into characters for character-by-character animation
export const SplitTextReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ text, className = "", delay = 0, duration = 0.05 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            delay: delay + index * duration,
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Word-by-word reveal animation
export const WordReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Line-by-line reveal with mask effect
export const LineReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={isInView ? { clipPath: "inset(0 0 0% 0)" } : {}}
      transition={{
        delay,
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Typewriter effect with cursor
export const TypewriterEffect: React.FC<{
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}> = ({ text, className = "", speed = 50, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeText, speed);
      } else {
        // Blink cursor for a bit then hide it
        setTimeout(() => setShowCursor(false), 2000);
      }
    };

    timeout = setTimeout(typeText, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div ref={ref} className={className}>
      {displayedText}
      {showCursor && <span className="border-r-2 border-primary animate-pulse">|</span>}
    </motion.div>
  );
};

// Text with gradient animation
export const GradientText: React.FC<{
  text: string;
  className?: string;
  colors?: string[];
}> = ({ text, className = "", colors = ["#f59e0b", "#d97706", "#b45309"] }) => {
  return (
    <motion.div
      className={`bg-gradient-to-r ${className}`}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "200% 200%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {text}
    </motion.div>
  );
};

// Text with wave animation
export const WaveText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={isInView ? {
            y: [0, -20, 0],
            transition: {
              delay: delay + index * 0.05,
              duration: 0.6,
              repeat: 1
            }
          } : {}}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Text with blur reveal effect
export const BlurReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{
        delay,
        duration: 1,
        ease: [0.4, 0.0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};