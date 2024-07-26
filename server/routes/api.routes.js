const router = require('express').Router();
const usersRouter = require('./users.routes')
const topicsRouter = require('./Topics.routes')
const questionsRouter = require('./Questions.routes')


router.use('/users', usersRouter)
router.use('/topics', topicsRouter)
router.use('/questions', questionsRouter)


module.exports = router