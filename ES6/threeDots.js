const taka = [12, 15, 52, 11];
const taka2 = [44, 55, 11];
const taka3 = [22, 33];

const totalTaka1 = [taka, taka2, 5, taka3]; 

const totalTaka = taka.concat(taka2).concat([5]).concat(taka3);

//ES6
const totalTaka2 = [...taka, ...taka2, 5, ...taka3];

console.log(totalTaka2);

//Arry Max
const mahmud = 13000;
const ashik = 3200;
const alam = 1000;


const totalPaay = [13000, 3200, 1000]; //it won't work for max

const maximum = Math.max(mahmud, ashik, alam);
console.log(maximum);


//ES6
const maximum2 = Math.max(...totalPaay);
console.log(maximum2);
