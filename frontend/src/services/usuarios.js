import httpService from "./httpService"
import { apiEndpoint } from "../config.json"
import jwtDecode from "jwt-decode"

const usuariosEndpoint = "/users"

export async function login(data) {
  const { data: resposta } = await httpService.post(
    `${apiEndpoint}${usuariosEndpoint}/login`,
    data
  )
  const { token } = resposta
  localStorage.setItem("token", JSON.stringify(token))
}

export async function registro(data) {
  const { data: resposta } = await httpService.post(
    `${apiEndpoint}${usuariosEndpoint}/registro`,
    data
  )
  const { token } = resposta
  localStorage.setItem("token", JSON.stringify(token))
}

export function atualizarSenha(data) {
  httpService.put(`${apiEndpoint}${usuariosEndpoint}/eu/alterarsenha`, data)
}

export function logout() {
  localStorage.removeItem("token")
}

export function getUsuarioLogado() {
  try {
    const jwt = localStorage.getItem("token")
    return jwtDecode(jwt)
  } catch (error) {
    return ""
  }
}
