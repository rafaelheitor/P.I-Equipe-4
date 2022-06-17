import React from "react"
import logo from '../img/paw-solid.svg'
import user from '../img/user-alt-solid.svg'
import cart from '../img/shopping-cart-solid.svg'


export default function Header() {
  return (
    <header>
      <nav className="container">
        <section className="p-header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <p>Pet & Cia</p>
          </div>

          <input type="text" placeholder="Pesquise seu Produto" />

          <button className="logo">
            <img src={user} alt="" />
            <a href="/users/login">Entre ou Registre-se</a>
          </button>
          <a href="/users/pagamento">
            <img
              src={cart}
              alt=" Carrinho de Compras"
              id="carrinho"
            />
          </a>
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
