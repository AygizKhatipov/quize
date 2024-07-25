const router = require('express').Router()
const { Topics } = require('../db/models')


router.route('/')
.get(async(req,res)=> {
    try {
        const readTopics = await Topics.findAll()
        res.status(200).json(readTopics)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.route('/:id')
.get(async(req,res)=> {
    try {
        const {id} = req.params
        const readTopicsId = await Topics.findAll({where:{id}})
        res.status(200).json(readTopicsId)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router