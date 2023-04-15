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
      return response.data
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
      const user = JSON.parse(response.data)
      console.log(user)
      return response.data;
      //   return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
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
  async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
      // console.log(data);
      // const userStringify = JSON.stringify(data)

      // console.log(userStringify)
      // const result = await axios.post(userStringify);
      // return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  // {
    // condition: (data, { getState }) => {
    //   const { contacts } = getState();
    //   if (isDublicate(data, contacts.items)) {
    //     alert(`${data.name} is already exist!`);
    //     return false;
    //   }
    // },
  // }
);

export const addContac = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, phone});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);