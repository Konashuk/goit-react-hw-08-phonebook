import { useDispatch, useSelector } from 'react-redux';
import { List, Item } from './contactList.styled';
import { selectFilterContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operation';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const updateCont = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              {`${name}: ${number}`}
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => updateCont(id)}
              >
                Delete
              </Button>
            </Item>
          );
        })}
    </List>
  );
};
