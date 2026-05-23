'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-purple bg-purple-500/20 border-b border-purple-400/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">RH</span>
            </div>
            <span className="hidden sm:inline text-white font-semibold">Ritarock Hangout</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="#event-details"
              className="text-purple-200 hover:text-purple-100 transition-colors text-sm md:text-base"
            >
              About
            </a>
            <a
              href="#register"
              className="btn-primary text-xs md:text-sm py-2 px-4"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
