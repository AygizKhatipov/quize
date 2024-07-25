const router = require('express').Router();
const usersRouter = require('./users.routes')
const Topics = require('./Topics.routes')
const Questions = require('./Questions.routes')


router.use('/users', usersRouter)
router.use('/categoryone', Topics)
router.use('/categorytwo', Questions)

module.exports = router