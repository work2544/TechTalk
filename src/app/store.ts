import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import LangOptionReducer from './slices/LangOptionReducer'
import LevelReducer from './slices/LevelReducter'
import StateReducer from './slices/StateReducer'
import UserProfileReducer from './slices/UserProfileReducer'

export const store = configureStore({
  reducer: {
  language:LangOptionReducer,
  level:LevelReducer,
  state:StateReducer,
  userprofile:UserProfileReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()