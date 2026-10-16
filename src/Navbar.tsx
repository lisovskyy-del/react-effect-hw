import React from 'react'
import { SearchInput } from "./SearchInput"
import { useTheme } from './ThemeContext'

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav>
      <h2>User App</h2>

      <div>
        <SearchInput/>
      </div>

      <button onClick={toggleTheme}>
        {isDarkMode ? 'Світла' : 'Темна'}
      </button>
    </nav>
  )
}