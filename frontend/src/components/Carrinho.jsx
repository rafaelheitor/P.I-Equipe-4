import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import CardProdutoCarrinho from './CardProdutoCarrinho'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify'

export default function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    () => JSON.parse(localStorage.getItem('produtos')) || [],
  )

  const removerCarrinho = (id) => {
    const novoCarrinho = produtosCarrinho.filter((produto) => produto.id !== id)
    setProdutosCarrinho(novoCarrinho)
    toast('Produto removido')
  }

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtosCarrinho))
  }, [produtosCarrinho])

  const cardsCarrinho = produtosCarrinho.map((produto) => (
    <CardProdutoCarrinho
      key={produto.id}
      id={produto.id}
      nome={produto.nome}
      valor={produto.valor}
      imagem={produto.imagem}
      categoria={produto.categoria}
      handleClick={removerCarrinho}
    />
  ))
  return (
    <div>
      <ToastContainer />
      <Header itens={produtosCarrinho.length} />
      {produtosCarrinho.length > 0 ? (
        <div className="catalogo">{cardsCarrinho}</div>
      ) : (
        <h1>Sem produtos adicionados</h1>
      )}
      <Footer />
    </div>
  )
}
