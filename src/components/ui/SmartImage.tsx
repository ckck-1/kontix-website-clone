"use client";

import Image from 'next/image';
import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackSrc,
  priority = false,
  fill = false,
  sizes,
  style,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      } else {
        // Generate a placeholder based on dimensions
        const placeholderSrc = `https://via.placeholder.com/${width || 400}x${height || 300}/1f2937/f59e0b?text=${encodeURIComponent(alt)}`;
        setImageSrc(placeholderSrc);
      }
    }
  };

  const imageProps = {
    src: imageSrc,
    alt,
    className,
    onError: handleError,
    priority,
    style,
    ...(fill ? { fill: true, sizes } : { width, height })
  };

  return <Image {...imageProps} />;
};

// Specialized components for different use cases
export const HeroImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&crop=edges&auto=format&q=80"
  />
);

export const ProfileImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
  />
);

export const BusinessImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=edges&auto=format&q=80"
  />
);

export const IconImage: React.FC<Omit<SmartImageProps, 'fallbackSrc'>> = (props) => (
  <SmartImage
    {...props}
    fallbackSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0Y1OUUwQiIvPgo8cGF0aCBkPSJNMjQgMTJMMzQgMzZIMTRMMjQgMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
  />
);