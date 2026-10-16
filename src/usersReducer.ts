import type {User, UserAction} from './types'

export interface UsersState {
  users: User[]
}

export const initialUsersState: UsersState = {
  users: [],
}

export const usersReducer = (state: UsersState, action: UserAction): UsersState => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      }

    case 'ADD_USER': {
      const newUser: User = {
        ...action.payload,
        id: Date.now(),
      }

      return {
        ...state,
        users: [newUser, ...state.users],
      }
    }

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      }

    default:
      return state
  }
}