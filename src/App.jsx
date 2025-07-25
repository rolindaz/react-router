import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
import ProductsPage from "./pages/ProductsPage"
import AboutUsPage from "./pages/AboutUsPage"
import DefaultLayout from "./layouts/DefaultLayout"
import SingleProductPage from "./pages/SingleProductPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/about-us" Component={AboutUsPage} />
            <Route path="/products/:id" Component={SingleProductPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
