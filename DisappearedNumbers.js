var findDisappearedNumbers = function(nums){
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0){
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
        }
    }
    var result = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            result.push(i + 1);
    }
    return result;
};