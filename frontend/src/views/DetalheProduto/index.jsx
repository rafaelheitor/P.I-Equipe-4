import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { infoProduto } from "../../services/produtos"

export default function Detalhe() {
  let { id } = useParams()
  const [produto, setProduto] = useState({})

  async function detalheProduto(id) {
    let produto = await infoProduto(id)
    console.log("ProdutoFunção" + JSON.stringify(produto))
  }

  const produtoApi = detalheProduto(id)
  console.log("ProdutoApi" + produtoApi)

  return (
    <>
      <h1>{produto.nome}</h1>
    </>
  )
}
