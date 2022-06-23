import httpService from "./httpService"
import { apiEndpoint } from "../config.json"

const produtosEndpoint = "/produtos"

export function getProdutos() {
  return httpService.get(apiEndpoint + produtosEndpoint)
}

export function createProduto(data) {
  return httpService.post(apiEndpoint + produtosEndpoint + "/novo", data)
}
export function deleteProduto(id) {
  return httpService.delete(apiEndpoint + produtosEndpoint + `/deletar/${id}`)
}
export async function infoProduto(id) {
  try {
    let { data: produto } = await httpService.get(
      apiEndpoint + produtosEndpoint + `/detalhe/${id}`
    )
    return produto
  } catch (error) {}
}
