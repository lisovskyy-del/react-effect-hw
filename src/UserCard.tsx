import React from 'react'
import type { User } from './types'

interface UserCardProps {
  user: User
  onDelete: (id: number) => void
}

export const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      {user.company && (
        <p><strong>Компанія:</strong> {user.company.name}</p>
      )}

      <div>
        <button onClick={() => onDelete(user.id)}>
          Видалити
        </button>
      </div>
    </div>
  )
}