import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CardProdutoCarrinho from "../../components/CardProdutoCarrinho"
import { ToastContainer } from "react-toastify"
import useCarrinho from "../../hooks/useCarrinho"
import useUsers from "../../hooks/useUsers"
import "../Home/App.css"

export default function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho, removerCarrinho] = useCarrinho()
  const [usuarioLogado, logoutFunction] = useUsers()

  const cardsCarrinho = produtosCarrinho.map((produto, index) => (
    <CardProdutoCarrinho
      key={index}
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
        usuario={usuarioLogado ? usuarioLogado.nome : ""}
        handleLogout={logoutFunction}
      />
      {produtosCarrinho.length > 0 ? (
        <div className='catalogo'>{cardsCarrinho}</div>
      ) : (
        <h1>Sem produtos adicionados</h1>
      )}
      <Footer />
    </div>
  )
}
