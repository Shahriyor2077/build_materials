import { Building2, Users, Factory, Award } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
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
