import React, { useEffect, useReducer } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ThemeProvider, useTheme } from './ThemeContext'

import { usersReducer, initialUsersState } from './usersReducer'
import { fetchUsers } from './api'

import { Navbar } from './Navbar'
import { UserForm } from './UserForm'
import { UserList } from './UserList'

import type {User, UserFormData} from './types'

const AppContent: React.FC = () => {
  const [state, dispatch] = useReducer(usersReducer, initialUsersState)
  const [searchParams] = useSearchParams()
  const { isDarkMode } = useTheme()

  const searchQuery = searchParams.get('search') || ''

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        dispatch({ type: 'SET_USERS', payload: data})
      })
      .catch((err) => {
        console.error('Помилка при завантаженні користувачів:', err)
      })
  }, [])

  const handleAddUser = (formData: UserFormData) => {
    const newUser: User = {
      ...formData,
      id: Date.now(),
    }

    dispatch({ type: 'ADD_USER', payload: newUser})
  }

  const handleDeleteUser = (id: number) => {
    dispatch({ type: 'DELETE_USER', payload: id })
  }

  const filteredUsers = state.users.filter((user) => {
    const query = searchQuery.toLowerCase()
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    )
  })

  return (
    <div style={{ backgroundColor: isDarkMode ? '#121212' : '#ffffff',
         color: isDarkMode ? '#ffffff' : '#000000',
    }}>
      <Navbar/>

      <main>
        <UserForm onAddUser={handleAddUser}/>

        <h2>Список користувачів ({filteredUsers.length})</h2>

        <UserList
          users={filteredUsers}
          onDeleteUser={handleDeleteUser}
        />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
