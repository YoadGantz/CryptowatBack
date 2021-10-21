const express = require('express')
const router = express.Router()

const { getTicker, getOrders } = require('./crypto.controller')

router.get('/Ticker', getTicker)
router.get('/Order', getOrders)

module.exports = router