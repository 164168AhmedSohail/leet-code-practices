function threeSumClosest(nums: number[], target: number): number {
   
    var closestSum = Infinity;
    // Iterate through all possible triplets
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                var currentSum = nums[i] + nums[j] + nums[k];
                // Update the closest sum if the current one is closer to the target
               
                if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                    closestSum = currentSum;
                }
            }
        }
    }
    return closestSum;

};