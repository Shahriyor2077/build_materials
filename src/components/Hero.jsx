import { useEffect, useState } from 'react'
import { Building2, Users, Factory, Award } from 'lucide-react'
import './Hero.css'

import bg1  from '../assets/photo_2026-03-17_23-44-44.jpg'
import bg2  from '../assets/photo_2026-03-17_23-44-46.jpg'
import bg3  from '../assets/photo_2026-03-17_23-44-47.jpg'
import bg4  from '../assets/photo_2026-03-17_23-44-48.jpg'
import bg5  from '../assets/photo_2026-03-17_23-44-49.jpg'
import bg6  from '../assets/photo_2026-03-17_23-44-50.jpg'
import bg7  from '../assets/photo_2026-03-17_23-44-51.jpg'
import bg8  from '../assets/photo_2026-03-17_23-44-52.jpg'
import bg9  from '../assets/photo_2026-03-17_23-44-53.jpg'
import bg10 from '../assets/photo_2026-03-17_23-44-54.jpg'

const slides = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => {
        setPrev(c)
        return (c + 1) % slides.length
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background slideshow */}
      <div className="hero-slides">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? 'active' : ''} ${i === prev ? 'leaving' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div className="hero-overlay" />

      {/* Dot indicators */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' hero-dot--active' : ''}`}
            onClick={() => { setPrev(current); setCurrent(i) }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="container hero-content">
        <p className="hero-badge">
          <Building2 size={14} />
          Xorazm viloyatining eng yirik temir-beton mahsulotlari ishlab chiqaruvchisi
        </p>
        <h1>Taraqqiyot va <span>Sifat Timsoli</span></h1>
        <p className="hero-desc">
          Xorazm Beton xususiy korxonasi 2015 yildan buyon Xorazm viloyatining Urganch tumanida yuqori sifatli temir-beton mahsulotlari ishlab chiqarib kelmoqda. Professionallik va sifat — bizning asosiy tamoyilimiz.
        </p>
        <div className="hero-btns">
          <a href="#products" className="btn btn-primary">Mahsulotlarni ko'rish</a>
          <a href="#contact" className="btn btn-outline">Bog'lanish</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <Award size={20} className="stat-icon" />
            <strong>2015</strong>
            <span>Tashkil etilgan</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <Users size={20} className="stat-icon" />
            <strong>30</strong>
            <span>Xodimlar</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <Factory size={20} className="stat-icon" />
            <strong>4 liniya</strong>
            <span>Ishlab chiqarish</span>
          </div>
        </div>
      </div>
    </section>
  )
}
