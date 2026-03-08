import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { it } from 'date-fns/locale'
import { differenceInCalendarDays, format, addDays, isBefore, isAfter, isSameDay } from 'date-fns'
import { CalendarDays, Moon, Euro, MessageCircle, Mail, X, Check } from 'lucide-react'
import 'react-day-picker/dist/style.css'
import { bookedDates, pricePerNight, minNights } from '../data/bookings'

const WHATSAPP_NUMBER = '393471234567' // ← sostituisci col tuo numero WhatsApp (formato internazionale, no +)
const EMAIL_ADDRESS = 'info@ameusa-palermo.it'  // ← sostituisci con la tua email

function isDateBooked(date) {
  return bookedDates.some(d => isSameDay(d, date))
}

function hasBookedDateInRange(from, to) {
  if (!from || !to) return false
  let current = addDays(from, 1)
  while (isBefore(current, to)) {
    if (isDateBooked(current)) return true
    current = addDays(current, 1)
  }
  return false
}

export default function BookingCalendar() {
  const [range, setRange] = useState({ from: undefined, to: undefined })
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '2', notes: '' })
  const [sent, setSent] = useState(false)

  const today = new Date()
  const nights = range.from && range.to
    ? differenceInCalendarDays(range.to, range.from)
    : 0
  const total = nights * pricePerNight

  const handleSelectRange = (selected) => {
    if (!selected) {
      setRange({ from: undefined, to: undefined })
      return
    }
    // If selected range includes a booked date, reset
    if (selected.from && selected.to && hasBookedDateInRange(selected.from, selected.to)) {
      setRange({ from: selected.to, to: undefined })
      return
    }
    setRange(selected)
  }

  const isDisabled = (date) => {
    return isBefore(date, today) || isSameDay(date, today) || isDateBooked(date)
  }

  const canBook = range.from && range.to && nights >= minNights

  const buildWhatsAppMessage = () => {
    const checkIn = format(range.from, 'dd/MM/yyyy')
    const checkOut = format(range.to, 'dd/MM/yyyy')
    const msg = `Ciao! Vorrei prenotare A' Meusa a Palermo.\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nNotti: ${nights}\nOspiti: ${form.guests}\nTotale: €${total}\n\nNome: ${form.name}\nEmail: ${form.email}\nTel: ${form.phone}\n${form.notes ? `Note: ${form.notes}` : ''}`
    return encodeURIComponent(msg)
  }

  const buildMailtoLink = () => {
    const checkIn = format(range.from, 'dd/MM/yyyy')
    const checkOut = format(range.to, 'dd/MM/yyyy')
    const subject = encodeURIComponent(`Richiesta prenotazione A' Meusa — ${checkIn} / ${checkOut}`)
    const body = encodeURIComponent(
      `Buongiorno,\n\nVorrei richiedere una prenotazione per:\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nNotti: ${nights}\nOspiti: ${form.guests}\nTotale stimato: €${total}\n\nNome: ${form.name}\nEmail: ${form.email}\nTelefono: ${form.phone}\n${form.notes ? `Note: ${form.notes}` : ''}\n\nResto in attesa di conferma.\nGrazie!`
    )
    return `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
  }

  return (
    <section id="calendar" className="py-20 bg-terra-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Disponibilità</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Scegli le tue date</h2>
          <p className="text-gray-500 text-lg">
            Seleziona le date di arrivo e partenza per verificare la disponibilità
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Calendar */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="w-5 h-5 text-brand-600" />
              <p className="font-semibold text-gray-900">
                {!range.from
                  ? 'Seleziona la data di check-in'
                  : !range.to
                  ? 'Seleziona la data di check-out'
                  : `${format(range.from, 'd MMM', { locale: it })} → ${format(range.to, 'd MMM yyyy', { locale: it })}`}
              </p>
              {(range.from || range.to) && (
                <button
                  onClick={() => setRange({ from: undefined, to: undefined })}
                  className="ml-auto text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <DayPicker
              mode="range"
              selected={range}
              onSelect={handleSelectRange}
              locale={it}
              numberOfMonths={2}
              disabled={isDisabled}
              fromDate={addDays(today, 1)}
              showOutsideDays={false}
              modifiers={{ booked: bookedDates }}
              modifiersClassNames={{ booked: 'rdp-day_disabled' }}
              className="w-full"
            />

            {/* Legend */}
            <div className="flex flex-wrap gap-5 mt-6 pt-6 border-t border-gray-100">
              {[
                { color: 'bg-brand-600', label: 'Date selezionate' },
                { color: 'bg-brand-100', label: 'Nel periodo selezionato' },
                { color: 'bg-gray-200', label: 'Non disponibile' },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded-full ${color}`} />
                  <span className="text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking summary card */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sticky top-24">
            {/* Price */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-gray-900">€{pricePerNight}</span>
              <span className="text-gray-500">/ notte</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Soggiorno minimo {minNights} notti</p>

            {/* Date inputs */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="border-2 border-gray-200 rounded-xl p-3 cursor-pointer hover:border-brand-400 transition-colors">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Check-in</p>
                <p className="font-semibold text-gray-900 text-sm">
                  {range.from ? format(range.from, 'd MMM yyyy', { locale: it }) : '—'}
                </p>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-3 cursor-pointer hover:border-brand-400 transition-colors">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Check-out</p>
                <p className="font-semibold text-gray-900 text-sm">
                  {range.to ? format(range.to, 'd MMM yyyy', { locale: it }) : '—'}
                </p>
              </div>
            </div>

            {/* Nights summary */}
            {canBook && (
              <div className="bg-terra-50 rounded-2xl p-4 mb-5 animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Moon className="w-4 h-4" />
                    €{pricePerNight} × {nights} {nights === 1 ? 'notte' : 'notti'}
                  </div>
                  <span className="font-semibold text-gray-900">€{total}</span>
                </div>
                <div className="border-t border-terra-200 pt-2 mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-2 font-bold text-gray-900">
                    <Euro className="w-4 h-4" />
                    Totale
                  </div>
                  <span className="font-bold text-gray-900 text-lg">€{total}</span>
                </div>
              </div>
            )}

            {/* Book button */}
            <button
              onClick={() => canBook && setShowModal(true)}
              disabled={!canBook}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-200 ${
                canBook
                  ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {!range.from || !range.to
                ? 'Seleziona le date'
                : nights < minNights
                ? `Minimo ${minNights} notti`
                : 'Richiedi prenotazione'}
            </button>

            {canBook && (
              <p className="text-center text-xs text-gray-400 mt-3">
                Non verranno addebitati importi ora
              </p>
            )}

            {/* Contact */}
            <div className="mt-6 pt-5 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 mb-3">Hai domande? Contattaci direttamente</p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-600 hover:bg-gray-800 hover:text-white hover:border-gray-800 font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            {!sent ? (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Richiesta di prenotazione</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {format(range.from, 'd MMM', { locale: it })} → {format(range.to, 'd MMM yyyy', { locale: it })} · {nights} notti · €{total}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome e cognome *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Ospiti *</label>
                      <select
                        value={form.guests}
                        onChange={e => setForm({ ...form, guests: e.target.value })}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors bg-white"
                      >
                        {[1,2,3,4,5,6].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'ospite' : 'ospiti'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                      placeholder="mario@email.it"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefono / WhatsApp</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors"
                      placeholder="+39 347 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Note o richieste speciali</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={e => setForm({ ...form, notes: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors resize-none"
                      placeholder="Arrivo tardi la sera, bambini piccoli, allergie..."
                    />
                  </div>

                  {/* Riepilogo */}
                  <div className="bg-terra-50 rounded-2xl p-4 text-sm">
                    <div className="flex justify-between mb-1 text-gray-600">
                      <span>Check-in</span>
                      <span className="font-medium text-gray-900">{format(range.from, 'EEEE d MMMM yyyy', { locale: it })}</span>
                    </div>
                    <div className="flex justify-between mb-1 text-gray-600">
                      <span>Check-out</span>
                      <span className="font-medium text-gray-900">{format(range.to, 'EEEE d MMMM yyyy', { locale: it })}</span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-900 border-t border-terra-200 mt-2 pt-2">
                      <span>Totale stimato</span>
                      <span>€{total}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 text-center">
                    Inviando la richiesta verrai contattato entro 24h per conferma e dettagli di pagamento.
                  </p>

                  {/* Send buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <a
                      href={buildWhatsAppMessage() ? `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}` : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { if (form.name && form.email) setSent(true) }}
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Invia su WhatsApp
                    </a>
                    <a
                      href={form.name && form.email ? buildMailtoLink() : '#'}
                      onClick={() => { if (form.name && form.email) setSent(true) }}
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      Invia per Email
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-12 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Richiesta inviata!</h3>
                <p className="text-gray-500 mb-2">
                  Grazie <strong>{form.name}</strong>! Abbiamo ricevuto la tua richiesta per
                </p>
                <p className="text-brand-600 font-semibold mb-6">
                  {format(range.from, 'd MMM', { locale: it })} → {format(range.to, 'd MMM yyyy', { locale: it })}
                </p>
                <p className="text-gray-500 text-sm mb-8">
                  Ti risponderemo entro 24 ore per confermare la disponibilità e procedere con il pagamento.
                </p>
                <button
                  onClick={() => { setShowModal(false); setSent(false); setRange({ from: undefined, to: undefined }) }}
                  className="btn-primary"
                >
                  Torna al sito
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
