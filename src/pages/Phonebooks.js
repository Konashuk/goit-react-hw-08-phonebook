import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from '../components/filter/filter';
import { ContactList } from '../components/contacklist/contactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export default function Phonebooks() {
  const dataContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      {dataContacts && <ContactList />}
    </div>
  );
}
