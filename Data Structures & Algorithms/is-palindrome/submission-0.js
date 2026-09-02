class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let filtered = "";
        for(let i=0;i<s.length;i++){
            let char = s[i].toLowerCase();
            if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
                filtered = filtered + char;
            }
        } 
        let reversed = "";
        for(let j=filtered.length-1;j>=0;j--){
            reversed = reversed + filtered[j];
        }

        if(filtered === reversed){
            return true
        }else {
            return false
        }
    }
}
