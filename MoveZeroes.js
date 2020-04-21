var moveZeroes = function(nums){
    if(nums.length === 0)
        return;
    var index = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != 0){
            nums[index] = nums[i];
            index = index + 1;
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
}
