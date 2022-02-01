import { createSlice } from '@reduxjs/toolkit'

interface BookState {
    allBooks: [],
    book: []
}

const initialState: BookState = {
    allBooks: [],
    book: []
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
    },
    setOpenBook: (state, action) => {
        state.book = action.payload
    }
},
})

export const { setBooks, refreshBooks, setOpenBook } = booksSlice.actions

export default booksSlice.reducer
