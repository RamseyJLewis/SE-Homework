////////////////////////////////////////////////////////9.16.20/////////////////////////////////////////////////////////////////////////////////////////

//Instructions
//Create a set of variables for your dream vehicle (number of wheels, number of seats, etc…)

// This should be at least 10 variables
// var brand = 'Porsche-959';
// var color = 'British Racing Green';
// var wheels = '4 stock wheels ';
// var year = '1986';
// var miles = 'zero';
// var rims = 'stock ';
// var windowtint = '5%';
// var calipers = 'yellow';
// var modeifications = 'stage 1';
// var interior = 'peanutbnutter';

// var sentence = `My dream car is a ${brand} from ${year} in ${color} with ${miles} miles. 
// The specifications I would want are ${wheels}, ${rims} rims, ${windowtint} windowtint, with a ${interior} interior.
// Lastly I would get it ${modeifications} and with ${calipers} calipers.`;
// console.log(sentence);

// Write code that converts the following into a city name & a city code
// For example: MAN54681;Manchester Piccadilly will convert to:
// "Code: MAN54681, City: Manchester Piccadilly"
 
// Write code that will convert each of the following. Hint, there is a solution that will convert them all perfectly instead of creating a unique solution for each entry.

// DON’T try and wing this, take a look at todays notes, collaborate with classmates, use the internet to help yourself land on the correct solution, and use office hours to get the solution.

 var repeat = "MAN54681;Manchester Piccadilly"
//  console.log(repeat.replace(';',', City: '));
// var repeat = "GNF6519871681;Greenfield"
// console.log(repeat.replace(';',', City: '));
// var repeat= "LIV515;Liverpool"
// console.log(repeat.replace(';',', City: '));
// var repeat= "SYB98981981;Stalybridge"
// console.log(repeat.replace(';',', City: '));
// var repeat = "HUD517819181;Huddersfield"
// console.log(repeat.replace(';',', City: '));
// var repeat = "MAN54681;Manchester Piccadilly" 
// console.log(repeat.replace(';',', City: '));
//testing git commit




////////////////////////////////////////////////////////////9.17.20////////////////////////////////////////////////////////
// nstructions
// Homework:

 

// Q1:
// Write some code that will split up a string into a clear string names.
// For example 'Manami+Anam' gets converted into 'Manami, Anam'.
// For example 'Nic+Laurie' gets converted into 'Nic, Laurie'.

var names = 'Nic, laurie';
console.log(names.replace("+",",")); 

// Q2:
// Write some code that gives us the length of a given string.
// For example 'Peter Parker' gives us 12.
// For example 'Michelle Obama' gives us 14.

var Q2 = 'pocketSquare';
var Q2A = Q2.length;
console.log(Q2A)
 

// Q3:
// a: Write some code that converts a string into all capitals
// For example: 'Peter Parker' changes to 'PETER PARKER'.
// b: Write some code that converts a string into all lowercase.
// For example: 'Michelle Obama' converts 'michelle obama'.

var superHero = 'Peter Parker';
// console.log(superHero.toUpperCase());


 

// Q4:
// a: Write some code that extrapolates the second word from the string: "My home town.".
// The result should be: 'home'
// b: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
// The result should be: 'eat'

var phrase = "My home town." ;
var newPhrase = phrase.slice(3, 7);
// console.log(newPhrase);

var phraseB = "Lets eat, Grandpa!" ;
var newPhrase2 = phraseB.slice(5, 7);
// console.log(newPhrase2);



// Q5:
// Write some code that capitalizes a portion of a given string.
// For example: "I'm very happy" becomes, "I'm VERY happy!"

// var Q5 = "My home town." ;
// console.log(Q5.replace('home','HOME'))



// Arrays:
// Q6: Write some code that retrieves the 3rd item from the array ['Red', 'Green', 'Yellow', 'Purple']

var color = ['Red', 'Green', 'Yellow', 'Purple']
var midColor = color [2]
// console.log(midColor);
 

// Q7: Write some code that converts the array ['Red', 'Green', 'Yellow', 'Purple'] to ['Green', 'Yellow', 'Blue', 'Purple', 'Pink']
//Remove red from they array
//insert Pink into they array

var color = ['Red', 'Green', 'Yellow', 'Purple'];
color.shift();
color.push('pink');
color.splice(2,0,'blue')
// console.log(color);




// My work
// Points
// No points


//////////////////////////////////////////////////9.18.20//////////////////////////////////////////////////////////////////


//Problem 1
// Using Math.random(), console.log 3 random numbers from 5 to 15
var number = [5,6,7,8,9,10,11,12,13,14,15];

function prob1() {
    var index = Math.floor(Math.random() * number.length)
   var output = number[index];
    return output;
  }

console.log(prob1());

// Problem 2
// Define a variable name and assign your name to it
// Create a function that returns your name
var name = ['Ramsey'] 

function n (str){
    return str
}
console.log(n(name))


// Problem 3
// Create a function that accepts 2 arguments, both of which are numbers, and returns the sum of those two numbers
var num1 = 22
var num2 = 22
function add(parameter1, parameter2){
    return parameter1 + parameter2
}
console.log(add(num2,num2))


// Problem 4
// Create a function that returns the type of any argument that is being called in the function
// example// type(400) // => 'number'
// type('hi') // => 'string'
function anyData(num){
    
    var output = typeof num;
        return output
}
console.log(anyData(['object']))



// Problem 5
// Hint: Ensure you are modifying the parameter and not the original variable inside the function, this will make your life easier with this question
// var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// Using the array above, create a funciton that returns the 4th element in the array.
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

function fiveOne(array51){
    return array51[3]

}
console.log(fiveOne(fruits))


// Create a function that returns only the last element in the fruits array
// var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

function fiveTwo(array52){
    var AL2 = array52.pop()
    return array52
}
console.log(fiveTwo(fruits))


// Create a function that returns [peach', 'lemon', 'plum', 'grape']
// ar fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

function fiveThree(array53){
    var AL3 = array53.pop()
    var AL3 = array53.shift()
    var AL3 = array53.shift()
    return array53
}
console.log(fiveThree(fruits))


// Create a function that adds another furit to the end of the array and returns the new array
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

function fiveFour(array54){
        var AL4 = array54.unshift('tangerines')
        return array54
}

console.log(fiveFour(fruits))


// Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']
        function fiveFive(array55){
            return array55
        }
    
        console.log(fiveFive(fruits))
       

// Problem 6
// var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']
// Using the array above, create a fucntion that returns the string, 'Hello Wil, happy Friday!'
var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']
        function sixOne (array61){
           
            var wil =  array61[0]
            var Q = 'Hellow ' + wil +' happy Friday!'
            
            return Q
            
        }
       console.log(sixOne( names))




    

// Create a function that returns the string, 'Howdy Sam!'
// Note: Be sure to change 'Samuel' to 'Sam'
var names = ['Wil', 'Shamika', 'Samuel', 'Ramsey']
        function sixTwo (array62){
           
            var sam =  array62[2]
            var Q = 'Howdy ' + sam

            var x = Q.slice(0, 9) + '!';
            
            return x
            
        }
      
      console.log(sixTwo( names))

// Problem 7
// var nums = [12, 3, 50, 1, 99, 2]
// Using a while loop, create a funciton that adds every number in the nums array and return the total number
// Note: this one is very challenging and requires a little bit of research, but give it shot!
// And remember to control - c if you log to the terminal and it is running infinitely!
var nums = [12, 3, 50, 1, 99, 2]

var sum = nums.reduce(function(a, b){
    return a + b;
}, 0);
    
    console. log(sum); 

//     Definition and Usage
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).