import './Partners.css'
import p1  from '../assets/photo_2026-03-10_10-28-38.jpg'
import p2  from '../assets/photo_2026-03-10_10-28-42.jpg'
import p3  from '../assets/photo_2026-03-10_10-28-44.jpg'
import p4  from '../assets/photo_2026-03-10_10-28-47.jpg'
import p5  from '../assets/photo_2026-03-10_10-28-49.jpg'
import p6  from '../assets/photo_2026-03-10_10-28-52.jpg'
import p7  from '../assets/photo_2026-03-10_10-28-55.jpg'
import p8  from '../assets/photo_2026-03-10_10-28-58.jpg'
import p9  from '../assets/photo_2026-03-10_10-29-01.jpg'
import p10 from '../assets/photo_2026-03-10_10-29-04.jpg'
import p11 from '../assets/photo_2026-03-10_10-29-12.jpg'
import p12 from '../assets/photo_2026-03-10_10-29-16.jpg'
import p13 from '../assets/photo_2026-03-10_10-29-29.jpg'
import p14 from '../assets/photo_2026-03-10_10-29-31.jpg'
import p15 from '../assets/photo_2026-03-10_10-29-34.jpg'
import nbu        from '../assets/NBU_new_logo.jpg'
import gaz        from '../assets/GAZ.jpg'
import versal     from '../assets/VERSAL CITY.PNG'
import eliteHouse from '../assets/XORAZM ELITE HOUSE.png'

const logos = [
  { src: p1,        alt: 'Hamkor 1'           },
  { src: p2,        alt: 'Hamkor 2'           },
  { src: p3,        alt: 'Hamkor 3'           },
  { src: p4,        alt: 'Hamkor 4'           },
  { src: p5,        alt: 'Hamkor 5'           },
  { src: p6,        alt: 'Hamkor 6'           },
  { src: p7,        alt: 'Hamkor 7'           },
  { src: p8,        alt: 'Hamkor 8'           },
  { src: p9,        alt: 'Hamkor 9'           },
  { src: p10,       alt: 'Hamkor 10'          },
  { src: p11,       alt: 'Hamkor 11'          },
  { src: p12,       alt: 'Hamkor 12'          },
  { src: p13,       alt: 'Hamkor 13'          },
  { src: p14,       alt: 'Hamkor 14'          },
  { src: p15,       alt: 'Hamkor 15'          },
  { src: nbu,       alt: "O'zmilliybank"      },
  { src: gaz,       alt: 'Ozbekneftegaz'      },
  { src: versal,    alt: 'New City Versal'    },
  { src: eliteHouse,alt: 'Xorazm Elite House' },
]

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="section-title">
          <h2>Kimlar bizga ishonadi?</h2>
          <div className="underline"></div>
          <p>Yirik qurilish kompaniyalari, davlat tashkilotlari va yetakchi biznes strukturalari bilan hamkorlik qilamiz.</p>
        </div>
        <div className="partners-grid">
          {logos.map((logo, i) => (
            <div className="partner-logo" key={i}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
