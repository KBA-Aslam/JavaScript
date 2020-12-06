feetToMile
function feetToMile(feet){
    var mile = feet / 5280 ;
    return mile;
}
var result = feetToMile(26400)
console.log(result)
//woodcalculator
function woodcalculator(chair, table, khaat){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var khaatCount = khaat * 5;
    var totalWood = chairCount + tableCount + khaatCount;
    return totalWood;
}
var calculator = woodcalculator(14, 12, 12);
console.log(calculator);
brickCalculator
var tola = 30;
var brick = 0;
if (tola <= 10) {
        var brick1 = tola * 1500;
    } 
    else if (tola <= 20){
        var brick1 = 10 * 1500;
        var remain =  tola - 10;
        var brick2 = remain * 1200;
        var brick = brick1 + brick2;
    }
    else{
        var brick1 = 10 * 1500;
        var brick2 = 10 * 1200;
        var remain = tola - 20;
        var brick3 = remain * 1000;
        var brick = brick1 + brick2 + brick3;
    }
    console.log(brick);
tinyFriend
function tinyFriends(names){
    var choto = names[0];
    for(var i = 0; i < names.length; i++){
        if(names.length > choto.length){
            choto = names;
        } 
    }
   return choto;
}
var chotonames = tinyFriends(["sakib", "mahmud", "nirz", "tarjinPriya", "ashrafi"]);
console.log(chotonames);