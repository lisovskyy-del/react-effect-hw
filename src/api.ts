import type { User } from './types'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data: User[] = await response.json()
    return data
  }
  catch (error) {
    console.error('Error:', error)
    throw error
  }
}