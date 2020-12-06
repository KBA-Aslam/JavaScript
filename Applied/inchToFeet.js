function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var khat = inchToFeet(72);
console.log(khat);
var table = inchToFeet(48);
console.log(table);
//kora jay bt bhejal lloop
var furniture = [72, 48, 36];
var chair = inchToFeet(furniture[2])
console.log(chair);