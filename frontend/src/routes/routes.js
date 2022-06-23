import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Carrinho from "../views/Carrinho"
import Login from "../views/Login"
import Registro from "../views/Registro"
import Detalhe from "../views/DetalheProduto"

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/produtos/:id/detalhe' element={<Detalhe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
