const express = require('express');
const router = express.Router();

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get('/fruits', (req, res) => {
    res.status(200).send(fruits);
})

router.get('/fruits/:id', (req, res) => {
    const specificFruit = fruits[req.params.id - 1];
    res.status(200).send(specificFruit)
})

module.exports = router;