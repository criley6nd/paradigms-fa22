function maxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for(let i = 0; i < nums.length ; i++){ //loop through every value in the list including the last
        if(nums[i] === 1) count++;
        if(count > max) max = count;
        if(nums[i] != 1) count = 0; //checks current value instead of next value, checks that the value does not
                                    //equal one instead of checking if it equals 0
    }    
    return max;
}

module.exports = {maxConsecutiveOnes};
