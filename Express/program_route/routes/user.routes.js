const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/', (req, res) => {
    res.send('Hello World! post');
});

router.put('/', (req, res) => {
    res.send('Hello World! put');
});

router.delete('/', (req, res) => {
    res.send('Hello World! delete');
});

router.patch('/', (req, res) => {
    res.send('Hello World! patch');
});

module.exports = router;