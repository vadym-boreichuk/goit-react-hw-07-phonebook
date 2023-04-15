import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { Div, List } from './ContactList.styled';
// import { selectFilteredContacts } from 'redux/selectors';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  // Отримуємо частини стану
  const state = useSelector( state => state.contacts.contacts);
console.log(state)
  return (
    <Div>
      <List>
        {state &&
          state.map((  {name, phone, id} ) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))}
      </List>
    </Div>
  );
};
