function Prime (n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "Is Not a Prime Number";
        }
    }
    return "Is a prime Number"
}
var result = Prime(121);
console.log(result);