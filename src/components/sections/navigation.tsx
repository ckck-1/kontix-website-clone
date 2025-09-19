"use client";

import React from 'react';
import Link from 'next/link';
import { IconImage } from '@/components/ui/SmartImage';
import { ShoppingCart, Menu as MenuIcon, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { MagneticHover } from '@/components/animations/AdvancedAnimations';
import { motion } from 'framer-motion';

const navItems = [
    { key: "home", dropdown: true, href: '#' },
    { key: "about", dropdown: true, href: '#' },
    { key: "pages", dropdown: true, href: '#' },
    { key: "blog", dropdown: true, href: '#' },
    { key: "shop", dropdown: true, href: '#' },
    { key: "contact", dropdown: false, href: '#' }
];

export default function Navigation() {
  const { t } = useLanguage();
  
  return (
    <header className="absolute w-full z-[999]" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="relative z-[1000]">
        <div className="mx-auto" style={{ width: '1249px', padding: '0px 15px' }}>
          <div className="grid items-center" style={{ gridTemplateColumns: "max-content 1fr max-content", height: '89.5938px' }}>
            {/* Logo */}
            <div className="justify-self-start">
              <Link href="/" aria-label="home" className="relative block" style={{ width: '123px', height: '30.0312px' }}>
                <IconImage
                  width={122}
                  height={30}
                  alt="Kontix Logo"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTIyIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSIxMCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGNTlFMEIiPktPTlRJWDwvdGV4dD4KPHN2Zz4K"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav role="navigation" className="justify-self-center hidden lg:flex">
              <StaggerContainer className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <StaggerItem key={item.key}>
                    <MagneticHover className="relative group">
                      <motion.a 
                        href={item.href} 
                        className="text-white hover:text-primary transition-colors flex items-center" 
                        style={{padding: '27px 15px', fontSize: '16px', fontFamily: 'Inter, sans-serif'}}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {t(`nav.${item.key}`)}
                        {item.dropdown && (
                          <motion.span 
                            style={{ marginLeft: '0.5rem' }}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.2 }}
                          >
                             <IconImage 
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAxTDQuNSA0TDggMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                  alt="Dropdown icon"
                                  width={9}
                                  height={6}
                              />
                          </motion.span>
                        )}
                      </motion.a>
                    </MagneticHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-6 justify-self-end">
              <LanguageToggle />
              <div className="relative cursor-pointer">
                <ShoppingCart className="text-white w-5 h-5" />
                <div 
                  className="absolute text-xs font-bold text-center text-black bg-primary rounded-full flex items-center justify-center pt-px"
                  style={{
                    width: '18px',
                    height: '18px',
                    top: '-8px',
                    right: '-9px',
                    lineHeight: 1
                  }}>
                  0
                </div>
              </div>
              <MenuIcon className="text-white w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}