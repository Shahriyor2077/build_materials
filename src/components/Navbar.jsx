import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Asosiy' },
  { href: '#products', label: 'Mahsulotlar' },
  { href: '#about', label: "Haqimizda" },
  { href: '#team', label: 'Jamoa' },
  { href: '#contact', label: 'Aloqa' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="logo-icon">🏗️</span>
          <span>Xorazm <strong>Beton</strong></span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menyu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
