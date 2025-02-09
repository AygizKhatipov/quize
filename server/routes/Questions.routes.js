const router = require('express').Router()
const {Questions} = require('../db/models')


router.route('/')
.get(async(req,res)=> {
    try {
        const readQuestions = await Questions.findAll()
        res.status(200).json(readQuestions)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.route('/:topicId')
.get(async(req,res)=> {
    try {
        const {topicId}= req.params
        const readQuestionsId = await Questions.findAll({where: {topicId}})
        res.status(200).json(readQuestionsId)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.route('/:topicId/:id')
.get(async(req,res)=> {
    try {
        const {topicId, id}= req.params
        const readQuestionsId = await Questions.findAll({where: {topicId,id},})
        res.status(200).json(readQuestionsId)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})




module.exports = router