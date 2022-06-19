import axios from 'axios'

const baseUrl = 'http://localhost:4000/users'
const logoutRoute = '/eu/logout'

const apiUsuarios = {
  logout: () => axios.post(baseUrl, logoutRoute),
  get: (id) => axios.get(baseUrl, id),
  login: (endpoit, data) => axios.post(baseUrl + endpoit, data),
}

export default apiUsuarios
