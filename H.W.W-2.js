///////////////////////////////////////9.22.20/////////////////////////////////////////////
// Q1: Create a loop that greets us 5 times!
//      - The console should similar to the following:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
var str = 'Hi!'

function greeting(){
    for( var i = 0; i < 5; i++){
        //console.log('Hi!')
    }
    return 'loop'
}

//console.log(greeting())
    



// Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
//      - The console should similar to the following:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter\
function loop (){
    for (var i = 1; i < 4; i++){
        //console.log(`Loop Count ${i}`)
    } 
}

//console.log(loop())

// Q3: Loop over the following array and console.log the current index value
//      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//      - The console should similar to the following:
//          -   Zeus
//          -   Hades
//          -   Hermies
//          -   Poseidon
var gods = ['Zeus', 'Hades', 'Hermies', 'Poseidon']

function godsList(){
    for (var i = 0; i < gods.length; i++){
        console.log(godsList[i])
    }
    return 'allGodsLogged'
}

////console.log(godsList())

// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input:    ['As', 'Soon', 'As' 'Possible']
    // Output: ['A','S','A','P']
        // make array =D
        // make function =D
        //get the length of arrray in function =D
        // seperate each element of the array
        // get first letter of each element of function
        //log

 var  sentInputArray = ['As', 'Soon', 'As', 'Possible' ]   
function sentInput(){
    var outPut = [  ]
    for (var i = 0; i < sentInputArray.length; i++){
        var Input = sentInputArray[i]
        var midTree = Input.charAt(0)
        outPut.push(midTree)
    }
    return outPut
}      
//console.log(sentInput())

// Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
    // - Input:    ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];
 var fruits = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
function fruitCap(){
    for (var i = 0; i < fruits.length; i++){
        var currentFruits = fruits[i];
        var upperCase = fruits[i].charAt(1).toUpperCase();
        var endOfSting = currentFruits.slice(2);
        var newString = fruits[i][0] + upperCase + endOfSting;
        fruits[i] = newString;
    }
}
fruitCap()
     //console.log(fruits)
    
    // Q6: Loop over an array of names and log the first and last initial of each person
    // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
    // - Output: ['SE', 'RL', 'SPL', 'WPL' ]
   //sperate first Initial
    //log the first


    var nameLst = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
function lstInitial(arr){
    var outPut = [];
  
  
    for(var i = 0; i < arr.length; i++){      
        var nameSplt = arr[i].split(' ');//['Samuel] [Pierre] [Louis']
        var initials =  nameSplt[0][0]; // accumulater, staring with first initals 'S'
                                                // nameSplt[0][0]= ['samuel] [S]
    
   
    for( var j = 1; j < nameSplt.length; j++){
        var currentName = nameSplt[j]; // Pierre
        var initial = currentName [0]; // 'P'
         initials = initials + initial; //'S' + 'P'

            }
            outPut.push(initials);
    }

    return outPut;

}

//console.log(lstInitial(nameLst));

//////////////////////////////////////9.22.20///////////////////////////////////////////////////////////////////

// level 0
    // Declare an object called person. 
    // Give the person several properties, including full name, height, and more
    // You'll be using this object for the remaining questions.
    var Ramiel  = {
        fullName: 'Ramiel, Bravery',
        eyeColor: 'brown', 
        height : 6,
        weight: 175,
        shirt: 'Xl',
        pantWaist:30,
        pantInseam:33,
    }

    // Q0.1
        // Add an email key value pair to the object called person
    Ramiel ['email'] = 'Ramiel.Bravey@gmail.com'
    console.log(Ramiel)
 
// level 1
    // Q 1.1    
        // Write some code that extracts the end of the email address
        // Log that to the console 
        Ramiel.length = 5;
    console.log(Ramiel.email.slice(13, 23));
       
   

// level 2
    // Q 2.1
        // write a conditional statement which checks if the person is 5'11", shorter, or taller.
        var davidBeck = 511
        var height = 512 // If the person is the same log, "Same height as Beckham" 
        // If the person is taller log, "Taller than Beckham"
        // If the person is shorter log, "Shorter than Beckham"
            // hint there are 12 inches in a foot, you may want to convert the height into only inches
            if ( height === davidBeck){
                console.log("Same height as Beckham" )
            } else if ( height > davidBeck){
                console.log("Taller than Beckham")}
             else if (height < davidBeck){
                console.log("Shorter than Beckham")
             }


           
    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 
        

// level 3
    // Q 3.1
        // Using the full name property, get the person's initials.
     
        // Create a new key called initials.
        // Set the value of this key to the person's initials.
            // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"
            Ramiel.length = 5;
            var firstInitial = (Ramiel.fullName.slice(0, 1));
            var lastInitial = (Ramiel.fullName.slice(8, 9));
            var initials = firstInitial + [','] + lastInitial
            console.log(initials)
    
            Ramiel['Initials'] = initials
            console.log(Ramiel)