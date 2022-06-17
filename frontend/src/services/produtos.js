import axios from "axios"

const baseUrl = "http://localhost:4000"

const apiProdutos = {
  get: (endpoit) => axios.get(baseUrl + endpoit),
  create: (endpoit, data) => axios.post(baseUrl + endpoit, data),
}

export default apiProdutos
