var maxSubArray = function(nums){
    if (nums.length === 0)
        return undefined;
    let num = nums[0];
    let sum = nums[0];
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] < 0)
            num = nums[index];
        else
            num = num + nums[index];
        if (num > sum)
            sum = num;
    }

    //动态规划
    for (let index = 0; index < nums.length; index++) {
        num = Math.max(num + nums[index],nums[index]);
        sum = Math.max(num,sum);
    }
    return sum;
}