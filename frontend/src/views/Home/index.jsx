import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CardProduto from '../../components/CardProduto'
import { getProdutos } from '../../services/produtos'
import { getUsuarioLogado, logout } from '../../services/usuarios'
import useCarrinho from '../../hooks/useCarrinho'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

export default function App() {
  const [apiData, setApiData] = useState([])
  const [produtosCarrinho, adicionaCarrinho] = useCarrinho()
  const [usuarioLogado, setUsuarioLogado] = useState('')
  const { usuario } = getUsuarioLogado()

  useEffect(() => {
    setUsuarioLogado(usuario)
  }, [])

  async function logoutFunction() {
    try {
      logout()
      toast.success('Logout efetuado com sucesso')
    } catch (error) {
      toast.error('Logout não efetuado')
    }
  }

  const fetchProdutos = async () => {
    try {
      const produtos = await getProdutos()
      setApiData(produtos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

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
      <div className="catalogo">{produtosCard}</div>
      <Footer />
    </div>
  )
}
