'use client';

import React, { useState } from 'react';
import { Moon, SlidersHorizontal, Sun, X } from 'lucide-react';
import { useKeyCombo } from '@/hooks/useKeyCombo';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useDarkMode } from '@/hooks/useDarkMode';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  useKeyCombo({ key: 'Escape' }, onClose);
  useScrollLock(isOpen);

  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 
                   ${isOpen ? 'opacity-50 z-40' : 'opacity-0 pointer-events-none'}`}
        onClick={() => onClose()}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-label="Menu"
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform 
                   transition-transform duration-300 ease-in-out z-50
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={() => onClose()}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="flex flex-col items-center justify-center h-full pb-20">
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => setIsDark((prev: boolean) => !prev)}
              className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 
                       transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-8 h-8 text-amber-500" />
              ) : (
                <Moon className="w-8 h-8 text-blue-600" />
              )}
            </button>
            <span className="text-sm text-gray-600">
              {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 
                 flex items-center justify-center focus:outline-none focus:ring-2 
                 focus:ring-gray-200"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <SlidersHorizontal className="w-5 h-5 text-gray-700" />
      </button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MenuButton;
