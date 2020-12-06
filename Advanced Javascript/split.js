const nums = [1, 2, 3, 4, 5, 6, 7, 9, 8];

const slice = nums.slice(2, 6);
console.log(slice);

//splice works in the main array. and 2nd num of splice will mean how many element you want to remove.
const remove = nums.splice(2,4, 45, 55);
console.log(remove);
console.log(nums);

const together = nums.join(" ");
console.log(together);