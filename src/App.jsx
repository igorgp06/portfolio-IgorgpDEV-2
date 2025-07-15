import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from "./pages/main/Main"
import { NotFound } from "./pages/err/NotFound"

function App() {
  return (
    <>
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
