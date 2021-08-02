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
    <div className='container'>
      <AddFriend setFriends={setFriends} />
      {isLoading ? (
        <h1 className='loading'>Players are Loading...</h1>
      ) : (
        <h1 className='loading'>Characters</h1>
      )}
      <div className='player-wrapper'>
        {friends.map(friend => (
          <div className='player' key={friend.id}>
            <img src={friend.img} alt='character' />
            <span>Name: {friend.name}</span>
            <span>Weapon: {friend.weapon}</span>
            <button onClick={e => deleteFriend(e, friend.id)}>
              Terminate Player
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
