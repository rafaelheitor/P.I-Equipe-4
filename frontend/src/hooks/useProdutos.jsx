import { useState, useEffect } from "react"
import { getProdutos } from "../services/produtos"

export default function useProdutos() {
  const [apiData, setApiData] = useState([])

  const fetchProdutos = async () => {
    try {
      const produtos = await getProdutos()
      setApiData(produtos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

  return apiData
}
