import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from "./pages/main/Main"
import { NotFound } from "./pages/err/NotFound"
import { Privacy } from "./pages/politics/Privacy"
import { Terms } from "./pages/politics/Terms"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/politica-de-privacidade" element={<Privacy />} />
          <Route path="/termos-de-uso" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
