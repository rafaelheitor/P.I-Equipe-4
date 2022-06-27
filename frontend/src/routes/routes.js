import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Carrinho from '../views/Carrinho'
import Login from '../views/Login'
import Registro from '../views/Registro'
import Detalhe from '../views/Detalhe'
import NovoProduto from '../views/NovoProduto'

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/admin/novoproduto" element={<NovoProduto />} />
          <Route path="/produtos/:id/detalhe" element={<Detalhe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
