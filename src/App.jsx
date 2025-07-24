import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
import Products from "./pages/ProductsPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage} />
          <Route path="/products" Component={Products} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
