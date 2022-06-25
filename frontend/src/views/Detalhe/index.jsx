import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { infoProduto } from '../../services/produtos'

export default function Detalhe() {
  const [produtoDetalhe, setProdutoDetalhe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    infoProduto(id).then((response) => setProdutoDetalhe(response))
  }, [])

  return (
    <>
      <h1>Produto - {produtoDetalhe.id} </h1>
      <h1>Produto - {produtoDetalhe.nome} </h1>
    </>
  )
}
