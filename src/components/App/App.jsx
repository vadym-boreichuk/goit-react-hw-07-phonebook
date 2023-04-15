import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/Form';
import { Div, Container, Title } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Div>
        <Title>Phonebook</Title>

        <ContactForm />
      </Div>
      <Div>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Div>
    </Container>
  );
};
