import { useEffect, useState, useCallback } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Erro na requisição')
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
  },[url])

  useEffect(()=>{
    fetchData()
  },[fetchData])

  return {data, loading, error, refech:fetchData}
}

export default useFetch