///////////////////////////////////////9.29.20/////////////////////////////////////////////////
// Create a function that checks if a number n is divisible by two numbers x AND y.
//  All inputs are positive, non-zero digits.

//  Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
    if (n %x){
       return (Boolean(false));
    }
    else if(n %y){
       return (Boolean(false));

    }
    else {
       return (Boolean(true));
    }
}
console.log(isDivisible(3,1,3))



// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }
let num = 348597

function digitize(n) 
{
    let str = n.toString();//348597 this is a string
    let arr = str.split("");//[ '3', '4', '8', '5', '9', '7' ]
    let rev = arr.reverse();//[ '7', '9', '5', '8', '4', '3' ]
    let revTwo = [] 
        for (let i = 0; i < rev.length ; i++ ){
        
        let revOne =  parseInt(rev[i]); // 15
        revTwo.push(revOne)
        
        }
        
        return revTwo
}
  console.log(digitize(num))


  //Abbreviate a Two Word Name
// Write a function to convert a name into initials. 
//This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F
function abbrevName(name){
    let output = '';
    let nametoArry = name.split(' ');
    for (let i = 0; i < nametoArry.length; i++){
        let currentName = nametoArry[i];
        let firstLetter = currentName[0].toUpperCase();
         output += firstLetter;
         if(i === 0){
      output += ".";
      }   
    }
      return output;
    }


    
  console.log(abbrevName("Ramsey Lewis"))


//   A Needle in the Haystack
//   Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

let needle = (['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

function findNeedle(haystack) {
let needleIndex = haystack.indexOf('needle')

    for (i = 0; i < findNeedle.length; i++ ){
        if(i = ' needle ' ){
            return "found the needle at position " +   ( needleIndex );
        }
    }

}
  console.log(findNeedle(haystack_1))




//  Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

test = 6.7
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
    time = Math.floor(time)
    let litres = time /2
    litres = Math.floor(litres)
    return litres //+ ' litre'

  }

  console.log(litres(test))


  