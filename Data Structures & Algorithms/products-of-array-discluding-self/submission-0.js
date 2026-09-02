class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);

        for(let i = 1; i<nums.length; i++){
            output[i] = output[i-1]* nums[i-1];
        }
        let suffix = 1;

        for(let j = output.length-1 ; j>=0 ; j--){
            output[j] = output[j] * suffix ;
            suffix = suffix * nums[j];
            
        }
        return output;
    }
}
