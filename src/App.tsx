import Header from "@/components/Header"
import HomeComponent from "@/components/Home"

import esLang from "@/i18n/es.json"


const App = () => {

  return (
    <>
      <Header />
      <HomeComponent text={esLang.HomeComponent} />
    </>
  )
}

export default App
