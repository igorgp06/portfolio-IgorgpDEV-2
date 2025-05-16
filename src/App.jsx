import { lazy, Suspense } from "react"

const Hero = lazy(() => import("./components/sections/hero/Hero"))
const Services = lazy(() => import("./components/sections/services/Services"))
const Portfolio = lazy(() => import("./components/sections/portfolio/Portfolio"))
const Contact = lazy(() => import("./components/sections/contact/Contact"))

const App = () => {
  return (
    <div className='container'>

      <Suspense fallback={"Cargando..."}>
        <section id='hero'>
          <Hero />
        </section>
      </Suspense>

      <Suspense fallback={"Cargando..."}>
        <section id='services'>
          <Services />
        </section> {" "}
      </Suspense>

      <Suspense fallback={"Cargando..."}>
        {/* <section id='portfolio'> */}
        <Portfolio />
        {/* </section> */} {" "}
      </Suspense>

      <Suspense fallback={"Cargando..."}>
        <section id='contact'>
          <Contact />
        </section>
      </Suspense>

    </div>
  );
};

export default App;