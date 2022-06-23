import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Carrinho from "../views/Carrinho"
import Login from "../views/Login"
import Registro from "../views/Registro"

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
