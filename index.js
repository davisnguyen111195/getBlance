const cheerio = require('cheerio');

const request = require('request-promise');
let address = "AJzoeKrj7RHMwSrPQDPdv61ciVEYpmhkjk"
request('https://neoscan.io/address/' + address, (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html); // load HTML

    console.log($('.balance-amount'))
  }
  else {
    console.log(error);
  }
});