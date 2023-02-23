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

// read
router.get('/users', (req, res) => {
    res.status(200).send(users);
})

router.get('/users/:id', (req, res) => {
    const specificUser = users[req.params.id - 1];
    res.status(200).send(specificUser)
})

// create
router.post('/users', (req, res) => {
    const newUser = req.body
    try {
        if (!req.body.name || !req.body.age) {
            throw new Error("Please enter valid user information")
        } else {
            users.push(newUser);
            res.status(201).send({ msg: "User successfully added", newUser});
        }
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

// update


// delete


module.exports = router;