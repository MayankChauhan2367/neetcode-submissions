class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i] , map.get(nums[i]) + 1);
            }else{
                map.set(nums[i] , 1)
            }
        }
        let ans = new Array(k).fill(0);

        for(let i=0 ; i<k ; i++){
            let max = -Infinity;
            let maxnum ;

            for(let [num,frequency] of map){
                if(frequency > max){
                    max = frequency;
                    maxnum = num;
                }
            }ans[i] = maxnum;
        map.delete(maxnum)
        }return ans;
    }
}
