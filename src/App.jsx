import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hero } from "./components/hero/Hero"
import { NotFound } from "./pages/err/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Hero /> }/>
          <Route path="*" element={ <NotFound /> }/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
