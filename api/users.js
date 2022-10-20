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
});
module.exports = router;



