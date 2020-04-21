var maxProfit = function(prices){
    /*
        动态规划：
        1.记录今天之前买入的最低价格
        2.计算今天之前最低价格买入  今天的获利
        3.比较每天活力的最大值
    */
    if (prices.length === 0)
        return 0;
    var min = prices[0];
    var max = 0;
    for (let index = 1; index < prices.length; index++) {
        max = max > (prices[index] - min) ? max : prices[index] - min;
        min = min < prices[index] ? min : prices[index];
        //max = Math.max(max,prices[i] - min);
        //min = Math.min(min,prices[i]);
     }
     return max;
}