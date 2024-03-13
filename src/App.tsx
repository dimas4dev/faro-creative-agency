import Header from "@/components/Header"
import HomeComponent from "@/components/Home"
import OurSponsors from "@/components/OurSponsors"

import esLang from "@/i18n/es.json"
import OurServices from "./components/OurServices"
import OurTestimonials from "./components/OurTestimonials"
import OurHighlights from "./components/OurHighlights"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

import "@/App.css"

const App = () => {

  return (
    <>
      <Header />
      <HomeComponent text={esLang.HomeComponent} />
      <OurSponsors text={esLang.OurSponsors} />
      <OurServices text={esLang.OurServices} />
      <OurHighlights text={esLang.OurHighlight} videoUrl="https://www.youtube.com/embed/J9V8lCTCcE0?si=vg1KYl6jaDnHEt6e" />
      <OurTestimonials text={esLang.OurTestimonials} />
      <ContactForm />
      <Footer text={esLang.Footer} />
    </>
  )
}

export default App
