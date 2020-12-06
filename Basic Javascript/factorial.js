//for loop
var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i
    console.log(i, factorial);
}
//while loop
var i = 1;
var factorial = 1;
while (i <= 5)  {
    factorial = factorial * i;
    // console.log(factorial);
    i++;
}
console.log(factorial);