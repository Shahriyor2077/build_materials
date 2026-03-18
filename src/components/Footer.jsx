import { MapPin, Phone, Users, Clock } from 'lucide-react'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">🏗️ Xorazm <strong>Beton</strong></div>
            <p>
              Xorazm viloyatining eng yirik temir-beton mahsulotlari ishlab
              chiqaruvchisi. Professionallik va sifat — bizning tamoyilimiz.
            </p>
            <p className="footer-since">© 2015 yildan buyon faoliyat yuritmoqda</p>
          </div>
          <div className="footer-links">
            <h4>Tezkor havolalar</h4>
            <ul>
              <li><a href="#home">Asosiy</a></li>
              <li><a href="#products">Mahsulotlar</a></li>
              <li><a href="#about">Haqimizda</a></li>
              <li><a href="#team">Jamoa</a></li>
              <li><a href="#contact">Aloqa</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Mahsulotlar</h4>
            <ul>
              <li><a href="#products">Beton Plita 1PK</a></li>
              <li><a href="#products">Beton Plita PB</a></li>
              <li><a href="#products">FBS Bloklar</a></li>
              <li><a href="#products">Tayyor Beton</a></li>
              <li><a href="#products">Kanalizatsiya Halqalari</a></li>
              <li><a href="#products">Temir-Beton Ariqlar</a></li>
              <li><a href="#products">Temir-Beton Ustunlar</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Aloqa</h4>
            <p><MapPin size={14} /> Xorazm viloyati, Urganch tumani, Orzu MFY</p>
            <p><Phone size={14} /> +998 91 999 99 89</p>
            <p><Phone size={14} /> +998 70 037 89 99</p>
            <p><Users size={14} /> Xodimlar: 30 nafar</p>
            <p><Clock size={14} /> Du–Sha: 8:00–18:00</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} "Xorazm Beton" XK. Barcha huquqlar himoyalangan.</p>
          <p>Direktor: Yusupov Davronbek Allaberganovich</p>
        </div>
      </div>
    </footer>
  )
}
