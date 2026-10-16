import React, { useState } from 'react'
import type {UserFormData} from './types'

interface UserFormProps {
  onAddUser: (data: UserFormData) => void
}

export const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim()) {
      alert("Будь ласка, заповніть ім'я та email")
      return
    }

    const newUser: UserFormData = {
      name,
      email,
      company: {
        name: companyName || 'Не вказано',
        catchPhrase: '',
        bs: '',
      },
    }

    onAddUser(newUser)

    setName('')
    setEmail('')
    setCompanyName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Додати нового користувача</h3>

      <div>
        <label>Ім'я:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введіть ім'я"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введіть email"
        />
      </div>

      <div>
        <label>Компанія:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Назва компанії"
        />
      </div>

      <button type="submit">
        Додати користувача
      </button>
    </form>
  )
}