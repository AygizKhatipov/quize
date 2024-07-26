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

router.route('/:id')
.get(async(req,res)=> {
    try {
        const {id}= req.params
        const readQuestionsId = await Questions.findAll({where: {id}})
        res.status(200).json(readQuestionsId)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})




module.exports = router