function maxProfitK(prices, k) {
  if (prices.length == 0) return 0;

  if (k >= prices.length / 2) {
    //console.log("first block");
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        maxProfit += prices[i] - prices[i - 1];
      }
    }
    return maxProfit;
  }

  let dp = Array.from({ length: k + 1 }, () => Array(prices.length).fill(0));

  //console.log(dp);

  for (let t = 1; t <= k; t++) {
    let maxThusFar = -prices[0];
    //console.log(maxThusFar);
    for (let d = 1; d < prices.length; d++) {
      dp[t][d] = Math.max(dp[t][d - 1], prices[d] + maxThusFar);
      maxThusFar = Math.max(maxThusFar, dp[t - 1][d] - prices[d]);
    }
  }

  return dp[k][prices.length - 1];
}

module.exports = maxProfitK;
