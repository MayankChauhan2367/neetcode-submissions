class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let output = 0;    
        let i = 0;let j = heights.length-1;

        while(i<j){
            let tall = Math.min(heights[i],heights[j])
            let width = j - i;
            let unit = tall * width;

            if(unit > output){
                output = unit;
            }else if (heights[i]<heights[j]){
                i++
            }else j--
        }
        return output;
    }
}
