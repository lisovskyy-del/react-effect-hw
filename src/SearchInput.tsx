import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from './useDebounce'

export const SearchInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialSearch = searchParams.get('search') || ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  const debouncedSearch = useDebounce(searchTerm, 400)

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams)

    if (debouncedSearch.trim()) {
      newParams.set('search', debouncedSearch)
    }
    else {
      newParams.delete('search')
    }

    setSearchParams(newParams, { replace: true})
  }, [debouncedSearch, setSearchParams])

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук за ім'ям або email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}