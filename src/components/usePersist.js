import {useEffect, useState} from 'react'

export const usePersist = (initialValue) => {
  const [value, setValue] = useState(() => {
      let persisted = localStorage.getItem('score')
      if (persisted == null) {
        return initialValue
      } else if (persisted != null) {
        return JSON.parse(persisted)
      }
  })
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(value))
  }, [value])
  return [value, setValue]
}