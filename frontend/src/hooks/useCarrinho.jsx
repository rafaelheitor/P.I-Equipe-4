import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function useCarrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState(
    () => JSON.parse(localStorage.getItem('produtos')) || [],
  )

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtosCarrinho))
  }, [produtosCarrinho])

  const adicionaCarrinho = (obj) => {
    setProdutosCarrinho((prevState) => [obj, ...prevState])
    toast.success('Produto adicionado ao carrinho')
  }

  const removerCarrinho = (id) => {
    const novoCarrinho = produtosCarrinho.filter((produto) => produto.id !== id)
    setProdutosCarrinho(novoCarrinho)
    toast('Produto removido')
  }

  return [produtosCarrinho, adicionaCarrinho, removerCarrinho]
}
