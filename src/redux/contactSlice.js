import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts, addContact, removingContact } from './operations';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts + payload;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removingContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removingContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    [removingContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // deleteContact(state, action) {
  //   return state.filter(contact => contact.id !== action.payload);
  // },
  // },
});
// Генератори екшенів
// export const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addContact,
//   deleteContact,
// } = contactSlice.actions;
// export const { addContact, deleteContact } = contactSlice.actions;
// Редюсер слайсу
export const contactReducer = contactSlice.reducer;
