import React, { useState } from "react"
import { Link } from "react-router-dom"
import { registro } from "../../services/usuarios"
import logo from "../../img/paw-solid.svg"
import "./style.css"

export default function Registro() {
  const [usuarioForm, setUsuarioForm] = useState({
    nome: "",
    email: "",
    senha: "",
  })

  function handleChange(event) {
    const { name, value } = event.target

    setUsuarioForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const postUsuario = async (event) => {
    event.preventDefault()
    await registro({
      nome: usuarioForm.nome,
      email: usuarioForm.email,
      senha: usuarioForm.senha,
    })
    window.location = "/"
  }

  return (
    <main className='registro'>
      <div className='registro-container'>
        <div className='head-login'>
          <Link to='/'>
            <h1>Pet & Cia </h1>
            <img src={logo} alt='logo' />
            <h3>Acesse Sua conta</h3>
          </Link>
        </div>
        <form>
          <label htmlFor='nome'>Digite seu Nome</label>
          <div className='controle-form'>
            <input
              type='text'
              placeholder='Nome'
              name='nome'
              value={usuarioForm.nome}
              onChange={handleChange}
            />
          </div>
          <label htmlFor='email'>Digite seu Email</label>
          <div className='controle-form'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={usuarioForm.email}
              onChange={handleChange}
            />
          </div>
          <label htmlFor='senha'>Digite sua senha</label>
          <div className='controle-form'>
            <input
              type='password'
              placeholder='Senha'
              name='senha'
              value={usuarioForm.senha}
              onChange={handleChange}
            />
          </div>
          <button className='btn' type='submit' onClick={postUsuario}>
            Entrar
          </button>
        </form>
        <p>Já é cadastrado? </p>
        <Link to='/login'>Login</Link>
      </div>
    </main>
  )
}
