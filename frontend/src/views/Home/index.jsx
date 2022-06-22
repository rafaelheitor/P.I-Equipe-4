import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import CardProduto from "../../components/CardProduto"
import { getProdutos } from "../../services/produtos"
import { getUsuarioLogado, logout } from "../../services/usuarios"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

export default function App() {
  const [apiData, setApiData] = useState([])
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    () => JSON.parse(localStorage.getItem("produtos")) || []
  )

  const [usuarioLogado, setUsuarioLogado] = useState("")
  const { usuario } = getUsuarioLogado()

  useEffect(() => {
    setUsuarioLogado(usuario)
  }, [usuarioLogado])

  async function logoutFunction() {
    try {
      logout()
      toast.success("Logout efetuado com sucesso")
    } catch (error) {
      toast.error("Logout não efetuado")
    }
  }

  const fetchProdutos = async () => {
    try {
      const { data: produtos } = await getProdutos()
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
    toast.success("Produto adicionado ao carrinho")
  }

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtosCarrinho))
  }, [produtosCarrinho])

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
