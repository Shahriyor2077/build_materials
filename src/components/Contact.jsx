import { useState } from 'react'
import { MapPin, Phone, Clock, Factory, Send } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const text = `📩 Yangi xabar!\n\n👤 Ism: ${form.name}\n📞 Telefon: ${form.phone}\n💬 Xabar: ${form.message}`
    try {
      await fetch(`https://api.telegram.org/bot8718062036:AAEqnljLwNpcNs-mI_r_fG3A5F-U69llukM/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: '-5270878564', text })
      })
    } catch (_) {}
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Biz Bilan Bog'laning</h2>
          <div className="underline" />
          <p>Savollaringiz bormi? Narx so'rash yoki buyurtma berish uchun biz bilan bog'laning</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Aloqa Ma'lumotlari</h3>

            <div className="info-list">
              <div className="info-item">
                <span className="info-icon"><MapPin size={20} /></span>
                <div>
                  <strong>Manzil</strong>
                  <p>Xorazm viloyati, Urganch tumani, Orzu MFY</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Phone size={20} /></span>
                <div>
                  <strong>Telefon</strong>
                  <p>+998 91 999 99 89</p>
                  <p>+998 70 037 89 99</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Clock size={20} /></span>
                <div>
                  <strong>Ish vaqti</strong>
                  <p>Dushanba–Shanba: 8:00 – 18:00</p>
                  <p>Yakshanba: Dam olish kuni</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><Factory size={20} /></span>
                <div>
                  <strong>Ishlab chiqarish</strong>
                  <p>4 ta zamonaviy ishlab chiqarish liniyasi</p>
                </div>
              </div>
            </div>

            <div className="contact-highlight">
              <p><strong>Buyurtma</strong> uchun qo'ng'iroq qiling — mutaxassislarimiz sizga yaqin vaqtda javob beradi!</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>Xabar Yuborish</h3>
            {sent && (
              <div className="success-msg">
                Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Ism va familiya *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+998 __ ___-__-__"
                  required
                />
              </div>
              <div className="form-group">
                <label>Xabar *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Qaysi mahsulot va qancha miqdorda kerak?"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={16} />
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
