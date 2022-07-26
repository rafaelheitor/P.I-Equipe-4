import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import CardProduto from "../../components/CardProduto"
import useCarrinho from "../../hooks/useCarrinho"
import useUsers from "../../hooks/useUsers"
import useProdutos from "../../hooks/useProdutos"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

export default function App() {
  const apiData = useProdutos()
  const [produtosCarrinho, adicionaCarrinho] = useCarrinho()
  const [usuarioLogado, logoutFunction] = useUsers()

  const produtosCard = apiData.map((produto, index) => (
    <CardProduto
      id={produto.id}
      key={index}
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
      <Header
        itens={produtosCarrinho.length}
        usuario={usuarioLogado ? usuarioLogado.nome : null}
        handleLogout={logoutFunction}
      />
      <div className='catalogo'>{produtosCard}</div>
      <Footer />
    </div>
  )
}
