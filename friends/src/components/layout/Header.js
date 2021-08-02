import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FriendsContext } from '../../contexts/friendsContext';

const Header = () => {
  const { friends } = useContext(FriendsContext);

  return (
    <header>
      <nav>
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 489.199 474.853'
            id='logo'
          >
            <path
              d='M168.481 158.2L136.34 93.312l38.275-69.984 69.121 25.23-57.888 99.446-17.367 6.912v3.284M294.97 145.67l24.107 9.937 97.112 137.981V115.776L348.8 90.203 294.97 145.67'
              fill='#00ad5b'
            />
            <path
              d='M294.97 145.67l13.653-14.082V23.156l-64.887 25.401-57.888 99.447 57.975-23.241 51.148 20.908'
              fill='#4a3a92'
            />
            <path
              d='M243.736 48.557l-69.121-25.229L241.144 0l67.479 23.156-64.887 25.401M71.799 115.259L0 85.88 66.012 64.11l68.687 25.748-62.9 25.402M348.799 90.203l71.278-29.551 69.122 25.23-73.01 29.894-67.39-25.573M168.481 154.916l75.342-30.153 75.254 30.844-74.478 30.5-76.118-31.191'
              fill='#f5b200'
            />
            <path
              d='M419.992 402.97L316.399 268.965v74.91l23.673 31.362 79.92 27.735'
              fill='#ed0128'
            />
            <path
              d='M134.699 375.667l-66.01-120.182v147.227zM244.599 186.107l74.478-30.5 97.112 137.981V115.776l73.01-29.895v288.664l-69.207 28.426-103.593-134.007v176.43l-71.8 29.46V186.106'
              fill='#4a3a92'
            />
            <path
              d='M168.481 154.916l76.118 31.19v288.747l-71.452-29.286L68.689 255.485v147.227L0 374.545V85.881l71.799 29.378 96.682 187.574V154.916'
              fill='#00ad5b'
            />
            <path
              d='M168.481 302.833L71.8 115.26l62.9-25.402L168.48 158.2v144.633'
              fill='#ed0128'
            />
            <path d='M416.19 115.776v177.812l-97.113-137.981 97.112 137.981V115.776' />
          </svg>
        </Link>
        <div className='nav-right'>
          {friends.length > 0 && <Link to='/players'>Players</Link>}
          {friends.length > 0 ? (
            <a href='/' onClick={() => window.localStorage.removeItem('token')}>
              Logout
            </a>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
