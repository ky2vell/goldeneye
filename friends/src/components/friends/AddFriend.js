import React from 'react';
import { useForm } from '../../hooks/useForm';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const initialValue = {
  name: '',
  weapon: '',
  img: ''
};

const AddFriend = ({ setFriends }) => {
  const [values, setValues, handleChanges] = useForm(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', values)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));

    setValues(initialValue);
  };

  return (
    <div className='player-form'>
      <h1>Add Player</h1>
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
        <label htmlFor='weapon'>Weapon of Choice:</label>
        <input
          id='weapon'
          type='text'
          name='weapon'
          value={values.weapon}
          onChange={handleChanges}
          placeholder='Weapon..'
        />
        <label htmlFor='img'>Player Image URL:</label>
        <input
          id='img'
          type='url'
          name='img'
          value={values.img}
          onChange={handleChanges}
          placeholder='Image..'
        />
        <button className='submit'>Submit!</button>
      </form>
    </div>
  );
};

export default AddFriend;
