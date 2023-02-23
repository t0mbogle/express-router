const express = require('express');
const router = express.Router();

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get('/users', (req, res) => {
    res.status(200).send(users);
})

router.get('/users/:id', (req, res) => {
    const specificUser = users[req.params.id - 1];
    res.status(200).send(specificUser)
})

module.exports = router;