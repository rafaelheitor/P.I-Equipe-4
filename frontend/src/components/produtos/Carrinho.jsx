import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CardProdutoCarrinho from './CardProdutoCarrinho'
import apiUsuarios from '../../services/usuarios'
import { ToastContainer, toast } from 'react-toastify'
import '../../App.css'

export default function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    () => JSON.parse(localStorage.getItem('produtos')) || [],
  )

  const [usuarioLogado, setUsuarioLogado] = useState(
    () => JSON.parse(localStorage.getItem('usuario')) || {},
  )

  function logout() {
    apiUsuarios.logout()
    setUsuarioLogado({})
  }

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado))
  }, [usuarioLogado])

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
      <Header
        itens={produtosCarrinho.length}
        usuario={usuarioLogado.nome}
        handleLogout={logout}
      />
      {produtosCarrinho.length > 0 ? (
        <div className="catalogo">{cardsCarrinho}</div>
      ) : (
        <h1>Sem produtos adicionados</h1>
      )}
      <Footer />
    </div>
  )
}
