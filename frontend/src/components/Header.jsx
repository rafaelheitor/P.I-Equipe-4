import React from 'react'
import logo from '../img/paw-solid.svg'
import user from '../img/user-alt-solid.svg'
import cart from '../img/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <nav className="container">
        <section className="p-header">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Pet & Cia</p>
            </div>
          </Link>

          <input type="text" placeholder="Pesquise seu Produto" />

          <button className="logo">
            <img src={user} alt="" />
            <Link to="/users/login">Entre ou Registre-se</Link>
          </button>
          <div>
            <Link to="/carrinho">
              {props.itens > 0 && <h4>{props.itens}</h4>}
              <img src={cart} alt=" Carrinho de Compras" id="carrinho" />
            </Link>
          </div>
        </section>

        <section className="s-header">
          <ul>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Contato</li>
            <li>Sobre Nós</li>
            <li>Promoções</li>
          </ul>
        </section>
      </nav>
    </header>
  )
}
