const express = require('express');
const feedController = require('../controllers/feed')

const router = express.Router();
//GET REQUEST
router.get('/posts',feedController.getPost)
//POST REQUEST
router.post('/posts',feedController.createPost)





module.exports = router;