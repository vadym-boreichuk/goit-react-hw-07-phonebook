import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = 'https://6436a0fa3e4d2b4a12d760a3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const id = useSelector(state => state.contacts.id);
      const response = await axios.delete(`/${id}`);
      // При успішному запиті повертаємо проміс із даними
      console.log(id);
      return response.data;
      //   return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removingContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// const isDublicate = ({ name }, contacts) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(item => {
//     return normalizedName === item.name.toLowerCase();
//   });
//   return Boolean(result);
// };

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const dat = JSON.stringify(data);
      console.log(dat);

      const result = await axios.post(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    // condition: (data, { getState }) => {
    //   const { contacts } = getState();
    //   if (isDublicate(data, contacts.items)) {
    //     alert(`${data.name} is already exist!`);
    //     return false;
    //   }
    // },
  }
);
