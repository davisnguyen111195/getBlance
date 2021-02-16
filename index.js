const cheerio = require('cheerio');

const request = require('request-promise');
let address = "AJzoeKrj7RHMwSrPQDPdv61ciVEYpmhkjk"
request('https://neoscan.io/address/' + address, (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html); // load HTML

    $('.balance-amount').each((index, el) => {
        const balance = $(el).find('.balance-amount p').text()
        console.log(balance)
    })
    }
  else {
    console.log(error);
  }
});