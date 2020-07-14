import React from 'react';
import { useForm } from '../../hooks/useForm';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const initialValue = {
  name: '',
  age: '',
  email: ''
};

const AddFriend = ({ setFriends }) => {
  const [values, handleChanges] = useForm(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', values)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        id='name'
        type='text'
        name='name'
        value={values.name}
        onChange={handleChanges}
        placeholder='Name..'
      />
      <label htmlFor='age'>Age:</label>
      <input
        id='age'
        type='number'
        name='age'
        value={values.age}
        onChange={handleChanges}
        placeholder='Age..'
      />
      <label htmlFor='email'>Age:</label>
      <input
        id='email'
        type='email'
        name='email'
        value={values.email}
        onChange={handleChanges}
        placeholder='Email..'
      />
      <button className='submit'>Submit!</button>
    </form>
  );
};

export default AddFriend;
