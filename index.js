const maxProfitK = require("./utils");

const prices = [3, 12, 6, 5, 4, 8, 0, 3, 12];
//console.log(prices.length);
const k = 4;
console.log("RESULT:");
console.log(
  `Max profit with price array ${prices} and ${k} transactions is: ${maxProfitK(
    prices,
    k
  )}`
);
