/*
    Challenge: 
    Create a variable name FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

FB = 3;

if (FB % 3 === 0 && FB % 5 ===0) {
    console.log("Fizz");
}else if (FB % 5 === 0) {
    console.log("Buzz");
}else if (FB % 3 === 0); {
    console.log('Fizz Buzz')
}

switch(true){
    case (FB % 3 === 0 && FB % 5 ===0):
        console.log('Hey Tom, when will you bring sourdough bread for ?');
        break;
    case (FB % 5 ===0):
        console.log('Hey Kenn, do you own a wolf in your backyard');
        break;
    case (FB % 3 ===0):
        console.log('Hey Kenn, do you own a wolf in your backyard');
        break;

// Ternary
FB = 56

(FB % 15 === 0)
    ? console.log('Fizz Buzz')
    : (FB % 5 === 0)
        ? console.log('Buzz')
        : (FB % 3 === 0)
        ?console.log('Fizz')
        : console.log(FB);