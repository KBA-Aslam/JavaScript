
var days = 30;
const startingDay = 4;

for(var i = 0; i < 5; i++){
    var daysRow = "";

    for(var j = 1; j <= 7; j++){
    var currentDays = 7 * i + j - startingDay;
    
    if(currentDays>days){
        break;
    } else if (currentDays < 1){
        currentDays = " ";
    }
    if(currentDays>9){
        daysRow += currentDays + "    ";
    } else{
        daysRow += currentDays + "     ";
    }
}
    console.log(daysRow);
}