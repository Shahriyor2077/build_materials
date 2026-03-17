import { CalendarDays, TrendingUp, Layers, Cpu } from 'lucide-react'
import './About.css'

const timeline = [
  { year: '2015', icon: <CalendarDays size={16} />, title: 'Korxona tashkil etildi', desc: "Urganch tumanida 2 nafar xodim bilan faoliyat boshlandi." },
  { year: '2018', icon: <TrendingUp size={16} />, title: 'Kengayish', desc: "6-7 nafar xodim. 6,30m PK plitalar ishlab chiqarish yo'lga qo'yildi." },
  { year: '2021', icon: <Layers size={16} />, title: 'Yangi liniyalar', desc: "2 ta liniya ishga tushirildi. Yillik aylanma 2 mlrd sum." },
  { year: '2025', icon: <TrendingUp size={16} />, title: "Jadal o'sish", desc: "7m plitalar va FBS bloklar. Yillik aylanma 6 mlrd sum." },
  { year: '2026', icon: <Cpu size={16} />, title: 'Zamonaviy texnologiyalar', desc: "9m PB plitalar va Tayyor Beton — 4 ta liniya." },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Kompaniya Haqimizda</h2>
            <div className="underline-left" />
            <p className="about-lead">Xorazm Beton — taraqqiyot va sifat timsoli</p>
            <p className="about-desc">
              Xorazm Beton xususiy korxonasi 2015 yilda Xorazm viloyatining Urganch tumanida
              tashkil etilgan. Korxonaning asosiy tamoyili — <strong>professionallik va sifat</strong>.
              Maqsad — temir-beton mahsulotlari orqali milliy brendni xalqaro darajaga olib chiqish.
              Hozirda <strong>30 nafar</strong> xodim, ularning <strong>60 foizi yoshlar</strong>.
            </p>
          </div>

          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-year">
                  <span className="tl-icon">{item.icon}</span>
                  {item.year}
                </div>
                <div className="tl-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
