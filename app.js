var ccxt = require('ccxt');

// let exchanges = ccxt.exchanges;
// let huobi = new ccxt.huobi ()
// let tickers = await huobi.fetchTicker  ('ETH/USDT');
// console.log(tickers);
async function main() {
    await ticker();
}

async function ticker(){
    let huobi = new ccxt.huobi ()
    let tickers = await huobi.fetchTicker('ETH/USDT');
    console.log(tickers);
}

main();
