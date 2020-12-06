var num = 2.4999;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
var result4 = Math.random() *10000;
var FinalResult = Math.round(result4);
console.log(FinalResult);
//max
var a = 122;
var b = 111;
var c = 123;
var max = Math.max(a, b, c)
console.log(max)
var min = Math.min(a, b, c)
console.log(min)
// arrayMax
var oushod =  ["ggg", "trffh", "hhi", "gg", "kk", "naam"]
var daami = oushod[0];
for(var i = 0; i < oushod.length; i++){
    var element = oushod[i];
    if(element < daami){
        daami = element;
    }
}
console.log("beshi dami is =", daami);