const router = require('express').Router()
const {User} = require('../db/models')


router.route('/')
.get(async(req,res)=> {
    try {
        const readAllUsers = await User.findAll()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
.post(async(req,res)=> {
    try {
        const {name, score}= req.body
        const newUser = await User.create()
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})





module.exports = router