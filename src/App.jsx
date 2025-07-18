import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from "./pages/main/Main"
import { NotFound } from "./pages/err/NotFound"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
