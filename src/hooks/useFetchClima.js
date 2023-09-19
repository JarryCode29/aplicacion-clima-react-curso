import { useEffect, useState } from 'react'

export const useFetchClima = (ciudad) => {
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '3089797a39215d5d42c44f8ad4ae840f'

  const [dataClima, setDataClima] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchClima = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
      if (!response.ok) {
        throw new Error('Respuesta de red incorrecta')
      }

      const data = await response.json()
      setDataClima(data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (ciudad) {
      fetchClima()
    }
  }, [ciudad])

  return {
    data: dataClima,
    isLoading,
    error,
    fetchClima
  }
}
