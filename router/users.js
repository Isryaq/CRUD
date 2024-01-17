const express = require('express');
const router = express.Router()
const usercontoller = require('../controllers/user')
const { verifyToken } = require('../middleware/authJwt');

router.get('/users', [verifyToken], usercontoller.get)

router.get('/users/:id', usercontoller.getid)

router.post('/user', usercontoller.post)

router.put('/user/:id', usercontoller.put)

router.delete('/user/:id', usercontoller.del)

module.exports = router;