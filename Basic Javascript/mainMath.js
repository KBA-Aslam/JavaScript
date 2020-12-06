var x = 4;
var y = 2;

x++;
// x = x+1;
x = y++;
// x = y;
// y = y + 1
x = ++y;
// y = y + 1;
// x = y;

x += 2; // x = x+2
x -= 5; //x = x-5
x *= 4; //x = x*4
x /= 2; //x = x/2
x %= 2; //x = x%2
console.log(x);