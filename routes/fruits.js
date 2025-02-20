const { check, validationResult } = require('express-validator')
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

// create
router.post('/fruits', [check("color").not().isEmpty().trim()], (req, res) => {
    const newFruit = req.body

    const errors = validationResult(req) // extracts validation errors from check()^
    if (!errors.isEmpty()) {
        res.json({ error: errors.array() })
    } else {

        try {
            if (!req.body.name || !req.body.color) { // if either name or color is falsy
                throw new Error("Please enter valid fruit information")
            } else {
                fruits.push(newFruit);
                res.status(201).send({ msg: "Fruit successfully added", fruits});
            }
        } catch (error) {
            res.status(400).send({ err: error.message })
        }

    }
})

// update
router.put('/fruits/:id', (req, res) => {
    let oldFruit = fruits[req.params.id -1];
    let updateFruit = req.body;
    try {
        if (!req.body.name || !req.body.color) {
            throw new Error("Please enter valid information to update a fruit")
        } else {
            oldFruit = updateFruit;
            res.status(200).send({ msg: "Fruit successfully updated", oldFruit })
        }
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

// delete
router.delete('/fruits/:id', (req, res) => {
    const deleteFruit = (req.params.id - 1);
    try {
        if (fruits.length < 1) {
            throw new Error("No fruit data available to be deleted")
        } else {
            fruits.splice(deleteFruit, 1);
            res.status(200).send({ msg: "Fruit successfully deleted", deleteFruitId: (deleteFruit + 1) })
        }
    } catch (error) {
        res.status(400).send({ err: error.message })
    }
})

module.exports = router;