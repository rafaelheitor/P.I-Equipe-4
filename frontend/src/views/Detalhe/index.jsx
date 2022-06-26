import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { infoProduto } from '../../services/produtos'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Detalhe() {
  const [produto, setProduto] = useState({})
  const { id } = useParams()

  const fetchProduto = async () => {
    try {
      const produto = await infoProduto(id)
      setProduto(produto)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProduto()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="descricao">
          <div>
            <img src={produto.imagem_produto} />
          </div>

          <section className="s-descricao">
            <div>
              <h2>{produto.nome}</h2>
              <p>{produto.id}</p>
              <p>
                Descrição:
                {produto.descricao}
              </p>
            </div>

            <div className="price">
              <span>R${produto.valor},00</span>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
