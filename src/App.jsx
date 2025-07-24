import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
