import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Amenities from './components/Amenities'
import BookingCalendar from './components/BookingCalendar'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <BookingCalendar />
      <Location />
      <Footer />
    </div>
  )
}

export default App
