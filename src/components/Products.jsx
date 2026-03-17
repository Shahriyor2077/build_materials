import './Products.css'

import betonPlitaImg from '../assets/beton_plita.jpg'
import betonPlita1Img from '../assets/beton_plita1.jpg'
import fbsImg from '../assets/fbs.jpg'
import tayyorBetonImg from '../assets/tayyor_beton.jpg'
import betonAriqImg from '../assets/beton_ariq.jpg'
import ustunImg from '../assets/ustun.jpg'
import kanalizatsiyaImg from '../assets/kanalizatsiya_xalqa.jpg'

const products = [
  {
    img: betonPlitaImg,
    name: 'Beton Plita 1PK',
    desc: "Ko'p g'ovakli 1PK temir-beton plitalari — aylana shaklidagi diametri 159mm, qalinligi 220mm. Uy-joy va sanoat qurilishlarida keng qo'llaniladi.",
    features: [
      "Uzunlik: 7m gacha, eni: 1m, 1,2m, 1,5m",
      "Yuqori yuk ko'taruvchanligi",
      'Tebranish, namga chidamli',
      "Shovqin va issiqlik o'tkazuvchanligi past",
      'Foydalanish muddati: kamida 25 yil',
    ],
    badge: null,
  },
  {
    img: betonPlita1Img,
    name: 'Beton Plita PB',
    desc: "Ko'p g'ovakli PB temir-beton plitalari — diametri 159mm, qalinligi 220mm. Zamonaviy qurilishlarda yuqori samaradorlik.",
    features: [
      'Uzunlik: 9m gacha, eni: 1,2m',
      'Zilzilabardosh',
      'Yuqori tovush va issiqlik izolyatsiyasi',
      'Korroziyaga, namlikka chidamli',
      "Tezkor va oson o'rnatish",
    ],
    badge: null,
  },
  {
    img: fbsImg,
    name: 'FBS Bloklar',
    desc: "Poydevor bloki FBS — zamonaviy sanoat va uy-joy qurilishlarida binolar va hudud atrofi devorlarining poydevorini qurishda keng qo'llaniladi.",
    features: [
      "Uzunlik: 2,4m / 1,2m / 0,9m",
      'Eni: 0,4m va 0,5m',
      "Yong'inga, namlikka chidamli",
      'Tez montaj qilish',
      'Qurilish muddatini qisqartiradi',
    ],
    badge: null,
  },
  {
    img: tayyorBetonImg,
    name: 'Tayyor Beton',
    desc: "Zavod sharoitida sement, qum, shag'al va suv maxsus nisbatda qorishtirilib tayyorlanadi. Mikserlar orqali qurilish maydoniga etkazib beriladi.",
    features: [
      'Markalar: M100, M200, M300, M400',
      'Avtobeton aralashtirgich (mikser) bilan etkazish',
      "Xom ashyo isrofi yo'q",
      'Qurilish maydonida joy tejaydi',
      'Tezkor qurilish imkoni',
    ],
    badge: null,
  },
  {
    img: betonAriqImg,
    name: 'Temir-Beton Ariqlar',
    desc: "Yo'l chetlari uchun temir-beton ariqlar — yomg'ir suvlarini yo'naltirish, yo'llar va binolarning xizmat davrini uzaytirish uchun.",
    features: [
      "Katta suv o'tkazish qobiliyati",
      "Sovuqqa chidamli, suv o'tkazmaydi",
      'Aggressiv sharoitlarga bardoshli',
      'Foydalanish muddati: kamida 25 yil',
      'Tez va qulay montaj',
    ],
    badge: null,
  },
  {
    img: ustunImg,
    name: 'Temir-Beton Ustunlar',
    desc: "SV turkumidagi oldindan zo'riqtirilgan temir-beton ustunlari — 0,4–10 kV gacha havo elektr uzatish liniyalari uchun.",
    features: [
      'Tebranishlarga chidamlilik: 9 ballgacha',
      'Sovuq harorat: -55°C gacha',
      "Suv o'tkazmaslik: W6–W8",
      'Sovuqqa chidamlilik: F150–F200',
      "Aggressiv muhitda qo'llash mumkin",
    ],
    badge: null,
  },
  {
    img: kanalizatsiyaImg,
    name: 'Kanalizatsiya Halqalari',
    desc: "Temir-beton kanalizatsiya halqalari — aholi va muhandislik inshootlari qurilishlarida keng qo'llaniladigan yig'ma temir-beton mahsulotlari.",
    features: [
      'Mustahkamlik va uzoq xizmat',
      "Kimyoviy birikmalar ta'siriga chidamli",
      'Namgarchilikka bardoshli',
      'Tez va qulay montaj',
      "Keng qo'llanish doirasi",
    ],
    badge: null,
  },
]

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-title">
          <h2>Mahsulotlarimiz</h2>
          <div className="underline" />
          <p>Qurilishning barcha bosqichlari uchun sertifikatlangan temir-beton mahsulotlari</p>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <div className="product-card" key={i}>
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
              <div className="product-img-wrap">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <ul className="product-features">
                  {product.features.map((f, j) => (
                    <li key={j}>
                      <span className="check">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="product-btn">Narxni bilish</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
