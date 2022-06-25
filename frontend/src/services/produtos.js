import httpService from './httpService'
import { apiEndpoint } from '../config.json'

const produtosEndpoint = '/produtos'

export async function getProdutos() {
  try {
    const { data } = await httpService.get(apiEndpoint + produtosEndpoint)
    const { listaDeProdutos } = data
    return listaDeProdutos
  } catch (error) {}
}

export function createProduto(data) {
  return httpService.post(apiEndpoint + produtosEndpoint + '/novo', data)
}
export function deleteProduto(id) {
  return httpService.delete(apiEndpoint + produtosEndpoint + `/deletar/${id}`)
}
export async function infoProduto(id) {
  try {
    const { data } = await httpService.get(
      apiEndpoint + produtosEndpoint + `/detalhe/${id}`,
    )
    const { produto } = data
    return produto
  } catch (error) {}
}
