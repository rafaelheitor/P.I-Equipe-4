import React from "react"
import CardProduto from "./components/CardProduto"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div>
      <NavBar />
      <CardProduto />
      <Footer />
    </div>
  )
}
