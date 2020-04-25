var findUnsortedSubarray = function(nums){
    let indexMin = 0;
    let indexMax = nums.length - 1;
    let numMin = nums[nums.length - 1];
    let numMax = nums[0];
    //从左到右遍历，查找最大值numMax，如果nums[index] < numMax，记录indexMax
    for (let index = 1; index < nums.length; index++) {
        if (numMax > nums[index]){
            indexMax = index - 1;
        } 
        else
            numMax = nums[index];
            
    }
    //从右到左遍历，查找最小值numMin，如果nums[index] > numMin，记录indexMin
    for (let index = nums.length - 2; index >= 0; index--) {
        if (numMin < nums[index]){
            indexMin = index + 1;
        }
        else
            numMin = nums[index];
    }
    if (indexMax - indexMin + 1 === nums.length)
        return 0;
    return Math.abs(indexMax - indexMin) + 1;
}