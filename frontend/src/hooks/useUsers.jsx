import { useEffect, useState } from 'react'
import { getUsuarioLogado, logout } from '../services/usuarios'

export default function useUsers() {
  const [usuarioLogado, setUsuarioLogado] = useState('')

  async function logoutFunction() {
    logout()
    setUsuarioLogado('')
  }

  useEffect(() => {
    const { usuario } = getUsuarioLogado()
    setUsuarioLogado(usuario)
  }, [])

  return [usuarioLogado, logoutFunction]
}
