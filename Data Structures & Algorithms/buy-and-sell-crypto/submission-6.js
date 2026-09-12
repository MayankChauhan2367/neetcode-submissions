class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit =  0 ;
        let buy = Infinity;
        
        for(let i =0;i<prices.length;i++){
            if(prices[i]<buy){
                buy = prices[i];
            }
            let profit = prices[i] - buy;
        maxProfit = Math.max(maxProfit, profit);
        }
        

        return maxProfit;
    }
}
