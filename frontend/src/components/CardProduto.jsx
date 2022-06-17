import React from "react"

export default function CardProduto(props) {
  return (
    <div>
      <img src={props.imagem} alt="produto" />
      <p>{props.nome}</p>
      <p>R${props.valor}</p>
      <p>{props.categoria}</p>
      <p>Pet&Cia</p>
      <a href="/produtos/1/detalhe">
        <button className="btn-info">
          <label>Mais informações</label>
        </button>
      </a>
      <button className="btn-carrinho">
        <label>Adicionar ao carrinho</label>
      </button>
    </div>
  )
}
