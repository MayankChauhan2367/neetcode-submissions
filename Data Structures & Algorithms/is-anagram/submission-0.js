class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)return false;
        const map = {};

        for(const char of s){
            map[char] = map[char]? map[char]+1 : 1;
        }
        for(const char of t){
            if(map[char]){
                map[char]-=1;

            }else{return false}
        }return true;
    }
}
