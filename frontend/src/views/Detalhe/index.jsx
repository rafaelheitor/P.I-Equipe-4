import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { infoProduto } from '../../services/produtos'

export default function Detalhe() {
  const { id } = useParams()

  async function fetchProduto() {
    let produto = await infoProduto(id)
    console.log(produto)
  }

  fetchProduto()
  return <h1>Produto - {id} </h1>
}
