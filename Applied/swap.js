var a = 7;
var b = 9;
console.log("before swap: a=", a, "b=", b);
var temp = a;
    a = b;
    b = temp;
 console.log("after swap: a=", a, "b=", b);
 // process 2
 var x = 3;
 var y = 6;
 var x = x + y;
    y = x - y;
    x = x - y;
    console.log("after swap: x=", x, "x=", y)
// for JavaScript
var p = 0;
var q = 1;
var [p, q] = [q, p]
console.log("after swap: p=", p, "q=", q)