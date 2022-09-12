function findMaxConsecutiveOnes(nums) {
    let maxLen = 0
    let currlen = 0
    //loops through and counts the groups of ones
    //keeps track of max length of ones and returns
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            currlen++
        }
        else{
            if(currlen > maxLen){
                maxLen = currlen
            }
            currlen = 0
        }
    }
    return currlen > maxLen ? currlen : maxLen
}

module.exports = {findMaxConsecutiveOnes}

nums = [1,1,10,1,1,1]
console.log(findMaxConsecutiveOnes(nums))
nums = [1,0,1,1,0,1]
console.log(findMaxConsecutiveOnes(nums))
nums = [1,-10,1,1,8,1,1,1,9,1,1,1,1,1,1]
console.log(findMaxConsecutiveOnes(nums))
nums = [1,1,5,1,1,1]
console.log(findMaxConsecutiveOnes(nums))
