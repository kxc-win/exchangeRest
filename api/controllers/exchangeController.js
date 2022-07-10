'use strict';
var ccxt = require('ccxt');

exports.fetchTicker =async function(req, res) {
    let query = req.query;
    console.log("query:",query)
    let  exchange= await getEx(query.ex);
    let symbol=query.token1+"/"+query.token2;
    let ethTicker = await exchange.fetchTicker(symbol);
    res.send(ethTicker);
};

async function getEx(exName){
    switch (exName) {
        case "huobi":
            return new ccxt.huobi();
            break;
        case "binance":
            return new ccxt.binance();
            break;
        case "bitfinex":
            return new ccxt.bitfinex();
            break;
        case "ftx":
            return new ccxt.ftx();
            break;
        case "okex":
            return new ccxt.okex();
            break;
        default:
            return new ccxt.binance();
            break;
    }
}


