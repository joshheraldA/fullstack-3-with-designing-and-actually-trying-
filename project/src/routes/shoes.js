// towel and 2 shorts
// slippers na white

const getShoes = require('../controller/shoes')

const express = require('express')
const router = express.Router()

router.get('/', getShoes)

module.exports = router;