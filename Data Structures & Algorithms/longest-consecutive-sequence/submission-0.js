class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Map();

        for(let i=0;i<nums.length;i++){
            map.set(nums[i], true)
        }
        let longest = 0;

        for(let k of map.keys()){
            if(!map.has(k-1)){
                let current  = k;
                let length = 1;

                while(map.has(current + 1)){
                    current ++;
                    length++;
                }
                if(longest<length){
                    longest = length;
                }
            }
        }return longest
    }
}
