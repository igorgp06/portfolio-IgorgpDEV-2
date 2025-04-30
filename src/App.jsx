import Hero from "./components/sections/hero/Hero"
import Services from "./components/sections/services/Services"
import Portfolio from "./components/sections/portfolio/Portfolio"
import Contact from "./components/sections/contact/Contact"

const App = () => {
  return (
    <div className='container'>
      
      <section id='#hero'>
        <Hero />
      </section>

      <section  id='#services'>
        <Services />
      </section>

      <section id='#portfolio'>
        <Portfolio />
      </section>

      <section id='#contact'>
        <Contact />
      </section>

    </div>
  )
}

export default App