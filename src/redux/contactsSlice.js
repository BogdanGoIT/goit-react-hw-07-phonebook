import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      },
// Код решти редюсерів
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      },
// Удалить контакт
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({id}) => id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      },

  },
});

export const contactsReducer = contactsSlice.reducer;


// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         addItems(state, action) {
//             return {
//                 ...state,
//                 items: [...state.items, action.payload],
//             }
//         },
//         deleteItems(state, action) {
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload),
//             }
//         },
//         addFilter(state, action) {
//             state.filter = action.payload;
//         }
//     },
// })

// export const { addItems, deleteItems, addFilter } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;