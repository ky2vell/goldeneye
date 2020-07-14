import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import AddFriend from './AddFriend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <AddFriend setFriends={setFriends} />
      <h1>Hi!!!!!</h1>
      {friends.map(friend => (
        <div className='friend' key={friend.id}>
          <ul>
            <li>Name: {friend.name}</li>
            <li>Age: {friend.age}</li>
            <li>Email: {friend.email}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default FriendsList;
