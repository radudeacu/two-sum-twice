

function twoSumOptimized(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

console.log(twoSumOptimized([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumOptimized([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSumOptimized([3, 3], 6));         // Output: [0, 1]
console.log(twoSumOptimized([3, 3, -2], 1));         // Output: [1, 2]