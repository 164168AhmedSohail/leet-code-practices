function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;  // Start pointer
        let right = nums.length - 1; // End pointer

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for the second number
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third number
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move the left pointer to increase the sum
            } else {
                right--; // Move the right pointer to decrease the sum
            }
        }
    }

    return result;   
};

