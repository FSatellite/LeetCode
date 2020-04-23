var twoSum = function(nums,target){
    let result = [];
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        if (map.has(target - nums[index])){
            result.push(index);
            result.push(map.get(target - nums[index]));
            break;
        }
        else
            map.set(nums[index],index);
    }
    return result;
}