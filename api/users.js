const express = require ('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
    queries.getAll('users').then(users => {
        res.json(users);
    })
})

router.post('/signup', (req, res) => {
    queries.createUser(req.body.username, req.body.email, req.body.password).then(user => {
        res.json(user[0]);
    });
})


router.post('/login', (req, res) => {
  queries.login(req.body.username, req.body.password).then((user) => {
  if (user) {
    res.json(auth.getToken(user.id, user.username));
  } else {
      return res.sendStatus(401);
    }
  });
});

router.post('/profile', (req, res) => {
    queries.getToken(req.header('Authorization').replace('Bearer ', '')).then((data) => {
        res.json(data);
    });
});
module.exports = router;



