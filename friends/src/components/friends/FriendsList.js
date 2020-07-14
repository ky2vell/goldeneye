import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { FriendsContext } from '../../contexts/friendsContext';

import AddFriend from './AddFriend';

const FriendsList = () => {
  const { friends, setFriends } = useContext(FriendsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        setFriends(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteFriend = (e, id) => {
    e.preventDefault();

    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <AddFriend setFriends={setFriends} />
      {isLoading ? (
        <h3>Data is Loading...</h3>
      ) : (
        friends.map(friend => (
          <div className='friend' key={friend.id}>
            <ul>
              <li>Name: {friend.name}</li>
              <li>Age: {friend.age}</li>
              <li>Email: {friend.email}</li>
              <button onClick={e => deleteFriend(e, friend.id)}>
                Delete Friend
              </button>
            </ul>
          </div>
        ))
      )}
    </>
  );
};

export default FriendsList;
