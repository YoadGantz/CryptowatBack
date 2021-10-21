const cryptoService = require('./crypto.service')

async function getTicker(req, res) {
    const ticker = await cryptoService.getTicker()
    res.send(ticker)
}

async function getOrders(req, res) {
    const orders = await cryptoService.getOrders()
    res.send(orders)
}

module.exports = {
    getTicker,
    getOrders
}