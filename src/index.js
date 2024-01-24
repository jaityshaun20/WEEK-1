/*console.log('Hello World');
///println statement prints Hello World

for(let x=1;x<=100;x++){
    if (x%2==0){
        console.log('Even'+ x)
    }
    if (x%2!=0){
        console.log('Odd'+x)
    }
} 
///Loop statement when x is less the 100 it will find the number if even print even and number if odd print odd and number 
let _= require('lodash');
let myVariable = 'go big red';
console.log(_.camelCase(myVariable)); lodash function 
///camelCase taking multiple words and printing them togther with the first letter of every word after the first to be capitalized
 let j = 0;
j=j + _.random(0,50);
console.log('A random number from 0 to 50 is '+j) finds a random number from 0 to 50*/
///above code was in class

const prompt = require("prompt-sync")();

///variables and steup of functions///
let _ = require('lodash');
let inWords = prompt("What Words would you like togther?");
console.log ('Which case function would you like?');
console.log ('1= camelCase thisIsAnExample');
console.log ('2= kebabCase this-is-an-example');
console.log ('3= lowerCase this is an example');
console.log ('4= snakeCase this_is_an_example');
console.log ('5= startCase This Is An Example');
console.log ('6= upperCase THIS IS AN EXAMPLE');
let opt = prompt("Choose a case function 1-6: ");

///diffrent lodash functions in use with if statemets ///
if (opt==1){
    console.log('camelCase');
    console.log(_.camelCase(inWords));
}
else if (opt=='2'){
    console.log('kebabCase');
    console.log(_.kebabCase(inWords));
}
else if (opt==3){
    console.log('lowerCase');
    console.log(_.lowerCase(inWords));
}
else if (opt==4){
    console.log('snakeCase');
    console.log(_.snakeCase(inWords));
}
else if (opt==5){
    console.log('startCase');
    console.log(_.startCase(inWords));
}
else if (opt==6){
    console.log('upperCase');
    console.log(_.upperCase(inWords));
}
else{
   console.log('Please try again! Make sure to enter a number 1-6 to choose a function!')
}
