import React from 'react';
import { useForm } from '../../hooks/useForm';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import logo from '../../images/logo.png';

const initialValue = {
  username: '',
  password: ''
};

const Login = props => {
  const [values, setValues, handleChanges] = useForm(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', values)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload);
        props.history.push('/players');
      })
      .catch(err => console.log(err));

    setValues(initialValue);
  };
  return (
    <div className='container flex'>
      <form onSubmit={handleSubmit} className='login'>
        <img src={logo} alt='logo' />
        <label htmlFor='username'>UserName:</label>
        <input
          id='username'
          type='text'
          name='username'
          value={values.username}
          onChange={handleChanges}
          placeholder='UserName..'
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChanges}
          placeholder='Password..'
        />
        <button className='submit'>Submit!</button>
      </form>
    </div>
  );
};

export default Login;
