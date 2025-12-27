import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Coin from './pages/coin/Coin'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
