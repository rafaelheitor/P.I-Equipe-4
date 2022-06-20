import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import jwt from "jwt-decode"
import apiUsuarios from "../services/usuarios"
import logo from "../img/paw-solid.svg"
import "../App.css"

export default function Login() {
  const [usuarioForm, setUsuarioForm] = useState({ email: "", senha: "" })

  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target

    setUsuarioForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const postUsuario = async (event) => {
    event.preventDefault()
    const { data: resposta } = await apiUsuarios.login("/login", {
      email: usuarioForm.email,
      senha: usuarioForm.senha,
    })
    const { token } = resposta
    const { usuario } = jwt(token)
    localStorage.setItem("usuario", JSON.stringify(usuario))
    navigate("/")
  }

  return (
    <div className="container-login">
      <div className="head-login">
        <Link to="/">
          <h1>Pet & Cia </h1>
          <img src={logo} alt="logo" />
          <h3>Acesse Sua conta</h3>
        </Link>
      </div>
      <form>
        <div className="controle-form">
          <label htmlFor="email">Digite seu Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={usuarioForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="controle-form">
          <label htmlFor="senha">Digite sua senha</label>
          <input
            type="password"
            placeholder="Senha"
            name="senha"
            value={usuarioForm.senha}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit" onClick={postUsuario}>
          Entrar
        </button>
      </form>
      <p>Ainda não tem registro?</p>
      <Link to="/registro">Registre-se</Link>
    </div>
  )
}
