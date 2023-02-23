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
router.put('/users/:id', (req, res) => {
    let oldUser = users[req.params.id -1];
    let updatedUser = req.body;
    try {
        if (!req.body.name || !req.body.age) {
            throw new Error("Please enter valid information to update a user")
        } else {
            oldUser = updatedUser;
            res.status(200).send({ msg: "User successfully updated", oldUser })
        }
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

// delete
router.delete('/users/:id', (req, res) => {
    const deleteUser = (req.params.id - 1);
    try {
        if (users.length < 1) {
            throw new Error("No user data available to be deleted")
        } else {
            users.splice(deleteUser, 1);
            res.status(200).send({ msg: "User successfully deleted", deleteUserId: (deleteUser + 1) })
        }
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

module.exports = router;