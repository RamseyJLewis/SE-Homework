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

//  var repeat = "MAN54681;Manchester Piccadilly"
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
console.log(superHero.toUpperCase());


 

// Q4:
// a: Write some code that extrapolates the second word from the string: "My home town.".
// The result should be: 'home'
// b: Write some code that extrapolates the second word from the string: "Lets eat, Grandpa!".
// The result should be: 'eat'

var phrase = "My home town." ;
var newPhrase = phrase.slice(3, 7);
console.log(newPhrase);

var phraseB = "Lets eat, Grandpa!" ;
var newPhrase = phraseB.slice(5, 7);
console.log(newPhrase);



// Q5:
// Write some code that capitalizes a portion of a given string.
// For example: "I'm very happy" becomes, "I'm VERY happy!"

var Q5 = "My home town." ;
console.log(Q5.replace('home','HOME'))



// Arrays:
// Q6: Write some code that retrieves the 3rd item from the array ['Red', 'Green', 'Yellow', 'Purple']

var color = ['Red', 'Green', 'Yellow', 'Purple']
var midColor = color [2]
console.log(midColor);
 

// Q7: Write some code that converts the array ['Red', 'Green', 'Yellow', 'Purple'] to ['Green', 'Yellow', 'Blue', 'Purple', 'Pink']
//Remove red from they array
//insert Pink into they array

var color = ['Red', 'Green', 'Yellow', 'Purple'];
color.shift();
color.push('pink');
color.splice(2,0,'blue')
console.log(color);




// My work
// Points
// No points