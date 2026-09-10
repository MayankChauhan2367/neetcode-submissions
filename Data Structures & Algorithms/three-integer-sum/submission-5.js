class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];

        nums.sort((a,b)=> a-b);
        for(let i=0;i<nums.length - 2 ;i++){
            if(i>0 && nums[i] === nums[i-1]){continue}
            let j = i+1;
            let k = nums.length-1;
        
            while(j<k){
                let sum = nums[k] + nums[j];
                if(sum === (0 - nums[i])){
                    output.push([nums[i],nums[j],nums[k]])
                    j++;
                    k--;
                    while(j<k && nums[j] === nums[j-1]) j++;
                    while (j<k && nums[k] === nums[k+1]) k--;
                }else if(sum> -nums[i]){
                    k--;
                }else {j++}
            }
        }return output;
    }
}
