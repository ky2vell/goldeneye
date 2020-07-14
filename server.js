const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let friends = [
  {
    id: 1,
    name: 'James Bond',
    weapon: 'PP7 Special Issue',
    img:
      'https://vignette.wikia.nocookie.net/goldeneye/images/d/df/Bond.png/revision/latest?cb=20140418052605'
  },
  {
    id: 2,
    name: 'Natalya Simonova',
    weapon: 'Cougar Magnum',
    img:
      'https://vignette.wikia.nocookie.net/goldeneye/images/e/e1/Natalya.png/revision/latest/scale-to-width-down/300?cb=20080510025631'
  },
  {
    id: 3,
    name: 'Alec Trevelyan',
    weapon:
      'Walther P99, Hand Grenade, D5K Deutsche, AR33 Assault Rifle, Automatic Shotgun, ZMG (9mm)',
    img:
      'https://vignette.wikia.nocookie.net/goldeneye/images/1/19/Trevelyan.png/revision/latest/scale-to-width-down/180?cb=20130418102211'
  },
  {
    id: 4,
    name: 'Xenia Onatopp',
    weapon: 'RC-P90, Grenade Launcher',
    img:
      'https://vignette.wikia.nocookie.net/goldeneye/images/a/a3/Xenia-article_image.jpg/revision/latest?cb=20140418044233'
  },
  {
    id: 5,
    name: 'Jaws',
    weapon: 'Double US AR33 Assault Rifles',
    img:
      'https://vignette.wikia.nocookie.net/goldeneye/images/c/cd/Jaws.png/revision/latest/scale-to-width-down/300?cb=20080510023317'
  },
  {
    id: 6,
    name: 'Oddjob',
    weapon: 'Goldeneye',
    img:
      'https://vignette.wikia.nocookie.net/goldeneye/images/f/f8/Oddjob.PNG/revision/latest?cb=20081116151915'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Lambda School' && password === '111') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
