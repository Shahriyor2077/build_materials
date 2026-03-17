import direktorImg from '../assets/direktor.jpg'
import boshTexnologImg from '../assets/bosh_texnolog.jpg'
import injinerImg from '../assets/injiner.jpg'
import sotuvImg from '../assets/sotuv_bolimi_rahbari.jpg'
import taminotImg from '../assets/taminot_rahbari.jpg'
import './Team.css'

const team = [
  {
    img: direktorImg,
    name: 'Yusupov Davronbek Allaberganovich',
    role: 'Korxona Direktori',
    desc: "2015 yilda 'Xorazm Beton' XKni asos solgan. 10 yildan ortiq tajriba bilan korxonani muvaffaqiyatli boshqarib kelmoqda.",
  },
  {
    img: boshTexnologImg,
    name: 'Bosh Texnolog',
    role: 'Bosh Texnolog',
    desc: "Yangi liniyalarni loyihalash va ishga tushirish bo'yicha mas'ul. Ispaniya va Rossiya texnologiyalarini joriy etishda asosiy rol o'ynaydi.",
  },
  {
    img: injinerImg,
    name: 'Muhandis',
    role: 'Bosh Muhandis',
    desc: "Ishlab chiqarish texnologiyalari va mahsulot sifatini nazorat qiladi. Ishlab chiqarish jarayonlarini texnik jihatdan ta'minlaydi.",
  },
  {
    img: sotuvImg,
    name: "Sotuv Bo'limi Rahbari",
    role: 'Sotuv va Marketing',
    desc: "Mijozlar bilan ishlash va sotuv strategiyasini boshqaradi. Korxona mahsulotlarini bozorga chiqarishda faol rol o'ynaydi.",
  },
  {
    img: taminotImg,
    name: "Ta'minot Rahbari",
    role: "Ta'minot Bo'limi Rahbari",
    desc: "Xom ashyo va materiallarni o'z vaqtida ta'minlashni nazorat qiladi. Etkazib beruvchilar bilan ishlaydi.",
  },
]

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-title">
          <h2>Bizning Jamoa</h2>
          <div className="underline" />
          <p>
            Korxona muvaffaqiyati ortida 30 nafar professional mutaxassis jamoasi turadi.
            Xodimlarning 60 foizini yoshlar tashkil etadi.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div className={`team-card ${i === 0 ? 'team-card--director' : ''}`} key={i}>
              <div className="team-avatar-wrap">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
