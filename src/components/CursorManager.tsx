"use client";

import { useEffect } from 'react';

export const CursorManager = () => {
  useEffect(() => {
    const checkIsMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };

    if (!checkIsMobile()) {
      document.body.classList.add('cursor-desktop-none');
    }

    const handleResize = () => {
      if (checkIsMobile()) {
        document.body.classList.remove('cursor-desktop-none');
      } else {
        document.body.classList.add('cursor-desktop-none');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
};