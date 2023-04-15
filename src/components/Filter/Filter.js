import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handlerFilter = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input name="filter" onChange={handlerFilter} />
    </Label>
  );
};
