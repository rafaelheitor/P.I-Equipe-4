import React from 'react'

export default function CardProduto(props) {
  return (
    <div>
      <img src={props.imagem} alt="produto" />
      <h4>{props.nome}</h4>
      <p>R${props.valor},00</p>
      <p>{props.categoria}</p>
      <p>Pet&Cia</p>
      <a href={`/produtos/${props.id}/detalhe`}>
        <button className="btn-info">
          <label>Mais informações</label>
        </button>
      </a>
      <button
        className="btn-carrinho-remover"
        onClick={() => props.handleClick(props.id)}
      >
        <label>Remover do carrinho</label>
      </button>
    </div>
  )
}
