import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './reducers/authSlice'
import booksReducer from './reducers/booksSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      books: booksReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch