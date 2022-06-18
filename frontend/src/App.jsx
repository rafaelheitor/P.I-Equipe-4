import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CardProduto from './components/CardProduto'
import Footer from './components/Footer'
import Header from './components/Header'
import produtosApi from './services/produtos'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

export default function App() {
  const [apiData, setApiData] = useState([])
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    () => JSON.parse(localStorage.getItem('produtos')) || [],
  )

  const fetchProdutos = async () => {
    try {
      const { data: produtos } = await produtosApi.get('/produtos')
      setApiData(produtos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

  const adicionaCarrinho = (obj) => {
    setProdutosCarrinho((prevState) => [obj, ...prevState])
    toast.success('Produto adicionado ao carrinho')
  }

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtosCarrinho))
  }, [produtosCarrinho])

  const produtosCard = apiData.map((produto) => (
    <CardProduto
      id={produto.id}
      key={produto.id}
      nome={produto.nome}
      valor={produto.valor}
      imagem={produto.imagem_produto}
      categoria={produto.categoria}
      carrinho={adicionaCarrinho}
    />
  ))

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="catalogo">{produtosCard}</div>
      <Footer />
    </div>
  )
}
