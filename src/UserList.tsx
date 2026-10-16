import React from 'react'
import type { User } from './types'
import { UserCard } from './UserCard'

interface UserListProps {
  users: User[]
  onDeleteUser: (id: number) => void
}

export const UserList: React.FC<UserListProps> = ({ users, onDeleteUser }) => {
  if (users.length === 0) {
    return <p>Користувачів не знайдено.</p>
  }

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDeleteUser}
        />
      ))}
    </div>
  )
}