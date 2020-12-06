const numbers = [12, 22, 6, 12];

const result = numbers.map( x => x * x);
console.log(result);
//map works like a loop. it works with every element of the array

const biggers = numbers.filter(x => x > 10);
console.log(biggers);
//filter works to find elements from array

const small = numbers.find(x => x < 15);
console.log(small) 
//find works to find element. but it can show only one result