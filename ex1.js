'use strict';
//Άσκηση 1
console.log('1η άσκηση');

for(var i=1 ; i<11 ; i++){
    console.log(i+"η δύναμη του 2: "+Math.pow(2,i));
}

//Άσκηση 2
console.log('2η άσκηση');

function Max(a,b,c){
    if(a>b && a>c)
        return a;
    if(b>a && b>c)
        return b;
    return c;
}

console.log("Κλήση της συνάρτησης με ορίσματα: 10,14,9");
console.log(Max(10,14,9));
console.log("Κλήση της συνάρτησης με ορίσματα: 'aa','ba','ca'");
console.log(Max("aa","ba","ca"));

//Άσκηση 3
console.log('3η άσκηση')

function power(a,b){
    if(a%1==0 && a>0 && b%1==0 && b>0){
        return Math.pow(a,b);
    }
    return undefined;
}

console.log("Κλήση της συνάρτησης με ορίσματα: 3,3");
console.log(power(3,3));
console.log("Κλήση της συνάρτησης με ορίσματα: 3.2,3");
console.log(power(3.2,3));
console.log("Κλήση της συνάρτησης με ορίσματα: -3,3");
console.log(power(-3,3));
console.log("Κλήση της συνάρτησης με ορίσματα: 'aa','ba'");
console.log(power("aa","ba"));