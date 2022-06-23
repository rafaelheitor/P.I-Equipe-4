import React from "react"
import { Link } from "react-router-dom"

export default function CardProduto(props) {
  return (
    <div>
      <img src={props.imagem} alt='produto' />
      <h4>{props.nome}</h4>
      <p>R${props.valor},00</p>
      <p>{props.categoria}</p>
      <p>Pet&Cia</p>
      <Link to={`/produtos/${props.id}/detalhe`}>
        <button className='btn-info'>
          <label>Mais informações</label>
        </button>
      </Link>
      <button className='btn-carrinho' onClick={() => props.carrinho(props)}>
        <label>Adicionar ao carrinho</label>
      </button>
    </div>
  )
}
