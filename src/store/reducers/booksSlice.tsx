import { createSlice } from '@reduxjs/toolkit'

interface BookState {
    allBooks: []
}

const initialState: BookState = {
    allBooks: []
}

export const booksSlice = createSlice({
name: 'books',
initialState,
reducers: {
    setBooks: (state, action) => {
        state.allBooks = action.payload
    },
    refreshBooks: (state, action) => {
        state.allBooks.sort(()=>Math.random()-0.5)
    }
},
})

export const { setBooks, refreshBooks } = booksSlice.actions

export default booksSlice.reducer
