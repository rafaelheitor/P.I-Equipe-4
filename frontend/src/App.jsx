import React from "react"
import CardProduto from "./components/CardProduto"
import Footer from "./components/Footer"
import Header from "./components/Header"
import produtos from "./produtos.json"
import "./App.css"

export default function App() {
  const produtosCard = produtos.map((produto) => (
    <CardProduto
      name={produto.nome}
      valor={produto.valor}
      imagem={produto.imagem_produto}
      categoria={produto.categoria}
    />
  ))

  return (
    <div>
      <Header />
      <div className="catalogo">{produtosCard}</div>
      <Footer />
    </div>
  )
}
