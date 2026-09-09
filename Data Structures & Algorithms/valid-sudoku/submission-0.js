class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length:9},()=>new Set());
        let collums = Array.from({length:9},()=>new Set());
        let boxes = Array.from({length:9},()=>new Set());

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                let nums = board[i][j];
                let row = i;
                let col = j;
                let box = Math.floor(i/3) *3 + Math.floor(j/3);

                if(nums == "."){continue}
                else if(rows[row].has(nums) || collums[col].has(nums) || boxes[box].has(nums) ){
                    return false
                }else{
                    rows[row].add(nums);
                    collums[col].add(nums);
                    boxes[box].add(nums);
                }
            }
        }return true
    }
}
