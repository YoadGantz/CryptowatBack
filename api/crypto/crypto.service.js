const axios = require('axios')

async function getTicker() {
    let res = await axios.get('https://api.kraken.com/0/public/Ticker?pair=BTCUSD')
    return res.data
}
async function getOrders() {
    let res = await axios.get('https://api.kraken.com/0/public/Depth?pair=BTCUSD&count=16')
    return res.data
}

module.exports = {
    getTicker,
    getOrders
}