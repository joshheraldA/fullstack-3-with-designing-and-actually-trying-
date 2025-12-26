const express = require('express')
const router = express.Router()

const { getBrands } = require('../controller/brand')

router.get('/', getBrands)

module.exports = router