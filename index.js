const rp = require("request-promise")
const cheerio = require("cheerio")
const fs = require("fs")
let address = `AJzoeKrj7RHMwSrPQDPdv61ciVEYpmhkjk`
const URL = `https://neoscan.io/address/` + address;
 
const options = {
  uri: URL,
  transform: function (body) {
    //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
    return cheerio.load(body);
  },
};
 
function crawler() {
  try {
    // Lấy dữ liệu từ trang crawl đã được parseDOM
    var $ = await rp(options);
  } catch (error) {
    return error;
  }

  let neoBalance = $("balance-amount").text()
  console.log(neoBalance)

}
crawler()