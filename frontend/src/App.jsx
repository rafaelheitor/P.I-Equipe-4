import React from "react"
import CardProduto from "./components/CardProduto"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./App.css"

export default function App() {
  return (
    <div>
      <Header />
      <div className="catalogo">
        <CardProduto
          nome="Ração de cachorro"
          valor="50,00"
          categoria="Alimentação"
          imagem="https://static.petz.com.br/fotos/1630012033940.jpg"
        />
        <CardProduto
          nome="Ração de cachorro"
          valor="50,00"
          categoria="Alimentação"
          imagem="https://static.petz.com.br/fotos/1630012033940.jpg"
        />
        <CardProduto
          nome="Ração de cachorro"
          valor="50,00"
          categoria="Alimentação"
          imagem="https://static.petz.com.br/fotos/1630012033940.jpg"
        />
        <CardProduto
          nome="Ração de cachorro"
          valor="50,00"
          categoria="Alimentação"
          imagem="https://static.petz.com.br/fotos/1630012033940.jpg"
        />
      </div>
      <Footer />
    </div>
  )
}
