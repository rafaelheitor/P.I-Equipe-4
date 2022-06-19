import axios from 'axios'

const baseUrl = 'http://localhost:4000/produtos'

const apiProdutos = {
  get: () => axios.get(baseUrl),
  create: (endpoit, data) => axios.post(baseUrl + endpoit, data),
}

export default apiProdutos
