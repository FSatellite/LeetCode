var majorityElement = function(nums){
    if (nums.length === 0)
        return null;
    var mapTemp = new Map();
    for (const i of nums) {
        mapTemp.set(i,0);
    }
    for (const i of nums) {
        mapTemp.set(i,mapTemp.get(i) + 1);
        if (Math.abs(mapTemp.get(i)) - nums.length / 2 > 0.000001)
            return i;
    }
};

var majorityElementMol = function(nums){
    let index = 1;
    var first = nums[0];
    for (var i = 1; i < nums.length; i++){
        if (first === nums[i])
            index = index + 1;
        else{
            index = index - 1;
            if (index === 0)
                first = nums[i + 1];
        }
    }
    return first;
}

var nums = [2,2,1,1,1,2,2];
console.log(majorityElementMol(nums)) ;