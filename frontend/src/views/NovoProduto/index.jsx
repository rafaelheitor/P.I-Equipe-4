import React, { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./style.css"

export default function NovoProduto() {
  const [formData, setFormData] = useState({
    nome: "",
    valor: "",
    categoria: "",
    imagem_produto: "",
    estoque: "",
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  console.log(formData)
  return (
    <>
      <Header />
      <main className='novo-produto'>
        <div className='container-produto'>
          <h1>Adicionar produto</h1>
          <form className='adiciona-produto'>
            <label htmlFor='nome'>Nome</label>
            <input
              type='text'
              name='nome'
              value={formData.nome}
              onChange={handleChange}
            />
            <label htmlFor='valor'>Valor</label>
            <input
              type='text'
              name='valor'
              value={formData.valor}
              onChange={handleChange}
            />
            <label htmlFor='categoria'>Categoria</label>
            <input
              type='text'
              name='categoria'
              value={formData.categoria}
              onChange={handleChange}
            />
            <label htmlFor='imagem_produto'>Url imagem</label>
            <input
              type='text'
              name='imagem_produto'
              value={formData.imagem_produto}
              onChange={handleChange}
            />
            <label htmlFor='estoque'>Estoque</label>
            <input
              type='text'
              name='estoque'
              value={formData.estoque}
              onChange={handleChange}
            />
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
