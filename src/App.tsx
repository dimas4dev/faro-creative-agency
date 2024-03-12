import Header from "@/components/Header"
import HomeComponent from "@/components/Home"
import OurSponsors from "@/components/OurSponsors"

import esLang from "@/i18n/es.json"
import OurServices from "./components/OurServices"
import OurTestimonials from "./components/OurTestimonials"


const App = () => {

  return (
    <>
      <Header />
      <HomeComponent text={esLang.HomeComponent} />
      <OurSponsors text={esLang.OurSponsors} />
      <OurServices text={esLang.OurServices} />
      <OurTestimonials />
    </>
  )
}

export default App
