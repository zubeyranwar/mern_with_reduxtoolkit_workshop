// bookSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    getBooks: (state, action) => {
      state.books = action.payload;
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    editBooks: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[index] = {
        id: action.payload._id,
        title: action.payload.title,
        author: action.payload.author,
      };
    },
    deleteBooks: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { getBooks, addBooks, editBooks, deleteBooks } = bookSlice.actions;

export default bookSlice.reducer;
