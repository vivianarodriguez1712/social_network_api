const router = require('express').Router();

const userR = require('./userR');
const thoughtsR = require('./thoughtsR');

// router.use('/users', userR);
router.use('/thoughts', thoughtsR);

module.exports = router;