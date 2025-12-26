// towel and 2 shorts
// slippers na white

const { getShoes, filterShoes} = require('../controller/shoes')

const express = require('express')
const router = express.Router()

router.get('/', getShoes)

router.get('/:brand', filterShoes)

module.exports = router;