import { useState, useEffect } from 'react'

const useApi = (fn, resolveCondition = []) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  if (!Array.isArray(resolveCondition)) {
    console.error(
      'Passed resolve condition for useEffect hook is not an array.'
    )
  }

  const request = (...args) => {
    setLoading(true)
    fn(...args)
      .then(returnedData => setData(returnedData))
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(request, resolveCondition)

  return {
    request,
    data,
    isLoading,
  }
}

export { useApi }
