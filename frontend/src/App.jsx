import React, { useState, useEffect } from "react"
import CardProduto from "./components/CardProduto"
import Footer from "./components/Footer"
import Header from "./components/Header"
import produtosApi from "./services/produtos"
import "./App.css"

export default function App() {
  const [apiData, setApiData] = useState([])

  const fetchProdutos = async () => {
    try {
      const { data: produtos } = await produtosApi.get("/produtos")
      setApiData(produtos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

  const produtosCard = apiData.map((produto) => (
    <CardProduto
      key={produto.id}
      nome={produto.nome}
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
