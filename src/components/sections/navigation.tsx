"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Menu as MenuIcon, ChevronDown } from 'lucide-react';

const navItems = [
    { name: "Home", dropdown: true, href: '#' },
    { name: "About", dropdown: true, href: '#' },
    { name: "Pages", dropdown: true, href: '#' },
    { name: "Blog", dropdown: true, href: '#' },
    { name: "Shop", dropdown: true, href: '#' },
    { name: "Contact", dropdown: false, href: '#' }
];

export default function Navigation() {
  return (
    <header className="absolute w-full z-[999]" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="relative z-[1000]">
        <div className="mx-auto" style={{ width: '1249px', padding: '0px 15px' }}>
          <div className="grid items-center" style={{ gridTemplateColumns: "max-content 1fr max-content", height: '89.5938px' }}>
            {/* Logo */}
            <div className="justify-self-start">
              <Link href="/" aria-label="home" legacyBehavior>
                <a className="relative block" style={{ width: '123px', height: '30.0312px' }}>
                  <Image
                    width={122}
                    height={30}
                    alt="Kontix Logo"
                    src="https://cdn.prod.website-files.com/67ad72477c605912a4af72eb/67c94f7dbbe29b1c799afe9f_kontix-header-logo.svg"
                  />
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav role="navigation" className="justify-self-center hidden lg:flex">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    <a href={item.href} className="text-white hover:text-primary transition-colors flex items-center" style={{padding: '27px 15px', fontSize: '16px', fontFamily: 'Inter, sans-serif'}}>
                      {item.name}
                      {item.dropdown && (
                        <span style={{ marginLeft: '0.5rem' }}>
                           <Image 
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67c94f121c461e580be3df21_Dropdown%20icon-2.svg"
                                alt="Dropdown icon"
                                width={9}
                                height={6}
                                style={{ filter: 'invert(1)' }} 
                            />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-6 justify-self-end">
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