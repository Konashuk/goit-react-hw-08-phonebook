import { useDispatch } from 'react-redux';
import { filters } from 'redux/contactsSlise';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const updateFilter = value => {
    dispatch(filters(value));
  };

  return (
    <TextField
      type="text"
      label="Find contacts by name"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={ev => updateFilter(ev.target.value)}
    ></TextField>
  );
};
