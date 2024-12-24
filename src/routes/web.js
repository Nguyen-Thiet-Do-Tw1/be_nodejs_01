const express = require('express')
const router = express.Router()
const { getHomePAGE, getTestPage } = require('../controllers/homeController')


router.get('/', getHomePAGE)
router.get('/test', getTestPage)


module.exports = router