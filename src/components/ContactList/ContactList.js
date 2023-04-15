import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { Div, List } from './ContactList.styled';
import { selectContacts, selectContactsFilter } from 'redux/selectors';

export const ContactList = () => {
  // Отримуємо частини стану
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <Div>
      <List>
        {visibilityContacts &&
          visibilityContacts.map(({ name, phone, id }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
          ))}
      </List>
    </Div>
  );
};
