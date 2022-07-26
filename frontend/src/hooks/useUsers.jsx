import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { getUsuarioLogado, logout } from "../services/usuarios"

export default function useUsers() {
  const [usuarioLogado, setUsuarioLogado] = useState("")

  async function logoutFunction() {
    try {
      logout()
      toast.success("Logout efetuado com sucesso")
    } catch (error) {
      toast.error("Logout não efetuado")
    }
  }

  useEffect(() => {
    const { usuario } = getUsuarioLogado()
    setUsuarioLogado(usuario)
  }, [])

  return [usuarioLogado, logoutFunction]
}
