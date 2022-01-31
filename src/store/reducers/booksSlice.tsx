import { createSlice } from '@reduxjs/toolkit'

interface BookState {
    allBooks: [],
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
},
})

export const { setBooks } = booksSlice.actions

export default booksSlice.reducer
