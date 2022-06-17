import React from "react"

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <div>
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <img src="/img/instagram-brands (1).svg" alt="Instagram" />
              <a></a>Instagram
            </li>
            <li>
              <img alt="Facebook" />
              <a></a>Facebook
            </li>
            <li>
              <img src="/img/twitter-brands.svg" alt="Twitter" />
              <a></a>Twitter
            </li>
          </ul>
        </div>

        <div className="enderco">
          <h4>Endereço</h4>
          <p>Rua das Creoulas 456 Recife - PE</p>
          <p>Cep: 50000000</p>
        </div>

        <div className="central">
          <h4>Central do Cliente</h4>
          <ul>
            <li>Pedidos</li>
            <li>Cadastro</li>
            <li>Ouvidoria</li>
          </ul>
        </div>

        <div className="departamento">
          <h4>Departamentos</h4>
          <ul>
            <li>
              <img src="/img/dog-solid.svg" alt="Departamento de Cães" />
            </li>
            <li>
              <img src="/img/cat-solid.svg" alt="Departamento de Gatos" />
            </li>
            <li>
              <img src="/img/fish-solid.svg" alt="Departamento de Peixes" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
