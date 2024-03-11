import Header from "@/components/Header"
import HomeComponent from "@/components/Home"
import OurSponsors from "@/components/OurSponsors"

import esLang from "@/i18n/es.json"


const App = () => {

  return (
    <>
      <Header />
      <HomeComponent text={esLang.HomeComponent} />
      <OurSponsors text={esLang.OurSponsors} />
    </>
  )
}

export default App
