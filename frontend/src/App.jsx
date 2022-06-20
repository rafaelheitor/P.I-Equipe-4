import React, { useState, useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CardProduto from './components/produtos/CardProduto'
import Footer from './components/Footer'
import Header from './components/Header'
import produtosApi from './services/produtos'
import apiUsuarios from './services/usuarios'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

export default function App() {
  const [apiData, setApiData] = useState([])
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    () => JSON.parse(localStorage.getItem('produtos')) || [],
  )

  const [usuarioLogado, setUsuarioLogado] = useState(
    () => JSON.parse(localStorage.getItem('usuario')) || {},
  )

  async function logout() {
    try {
      await apiUsuarios.logout()
      setUsuarioLogado({})
    } catch (error) {
      toast.error('Logout não efetuado')
    }
  }

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado))
  }, [usuarioLogado])

  const fetchProdutos = async () => {
    try {
      const { data: produtos } = await produtosApi.get()
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
      <Header
        itens={produtosCarrinho.length}
        usuario={usuarioLogado.nome}
        handleLogout={logout}
      />
      <div className="catalogo">{produtosCard}</div>
      <Footer />
    </div>
  )
}
