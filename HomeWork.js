//9.16.20
//Instructions
//Create a set of variables for your dream vehicle (number of wheels, number of seats, etc…)

// This should be at least 10 variables
var brand = 'Porsche-959';
var color = 'British Racing Green';
var wheels = '4 stock wheels ';
var year = '1986';
var miles = 'zero';
var rims = 'stock ';
var windowtint = '5%';
var calipers = 'yellow';
var modeifications = 'stage 1';
var interior = 'peanutbnutter';

var sentence = `My dream car is a ${brand} from ${year} in ${color} with ${miles} miles. 
The specifications I would want are ${wheels}, ${rims} rims, ${windowtint} windowtint, with a ${interior} interior.
Lastly I would get it ${modeifications} and with ${calipers} calipers.`;
console.log(sentence);

// Write code that converts the following into a city name & a city code
// For example: MAN54681;Manchester Piccadilly will convert to:
// "Code: MAN54681, City: Manchester Piccadilly"
 
// Write code that will convert each of the following. Hint, there is a solution that will convert them all perfectly instead of creating a unique solution for each entry.

// DON’T try and wing this, take a look at todays notes, collaborate with classmates, use the internet to help yourself land on the correct solution, and use office hours to get the solution.

 var repeat = "MAN54681;Manchester Piccadilly"
 console.log(repeat.replace(';',', City: '));
var repeat = "GNF6519871681;Greenfield"
console.log(repeat.replace(';',', City: '));
var repeat= "LIV515;Liverpool"
console.log(repeat.replace(';',', City: '));
var repeat= "SYB98981981;Stalybridge"
console.log(repeat.replace(';',', City: '));
var repeat = "HUD517819181;Huddersfield"
console.log(repeat.replace(';',', City: '));
var repeat = "MAN54681;Manchester Piccadilly" 
console.log(repeat.replace(';',', City: '));