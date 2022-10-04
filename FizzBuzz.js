//PRINT THE NUMBERS FROM 1 TO 100. 
//BUT IF THE NUMBER IS DIVISIBLE BY 3, PRINT "FIZZ" INSTEAD OF THE NUMBER. 
//AND IF THE NUMBER IS DIVISIBLE BY 5, PRINT "BUZZ" INSTEAD OF THE NUMBER. 
var fizzBuzzArray=[];
for (let i = 1; i <= 100; i++) // loop 1 to 100 (works as a counter too)
if (i % 3 === 0 && i % 5 === 0){ //first condition: remainder of a division by 3 AND 5 is zero
    fizzBuzzArray.push("FizzBuzz");
} else if (i % 3 === 0) { // second condition: remainder of a division by 3 is zero
    fizzBuzzArray.push("Fizz");
} else if (i % 5 === 0) { fizzBuzzArray.push("Buzz"); // third condition: remainder of a division by 5 is zero
} else {fizzBuzzArray.push(i)} // print numbers not divisible by 3 or 5 nor 3 AND 5.
console.log(fizzBuzzArray) // display numbers
