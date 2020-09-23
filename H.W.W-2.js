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
   // console.log(greeting())
    



// Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
//      - The console should similar to the following:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter\
function loop (){
for (var i = 1; i < 4; i++){

    // console.log(`Loop Count ${i}`)
} 

}
// console.log(loop())

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
        //console.log(gods[i])
        }
        return 'allGodsLogged'
    }
   // console.log(godsList())

// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input:    ['As', 'Soon', 'As' 'Possible']
    // Output: ['A','S','A','P']
        // make array =D
        // make function =D
        //get the length of arrray in function =D
        // seperate each element of the array
        // get first letter of each element of function
        //log

    var  sentInputArray = ['As', 'Soon', 'As', 'Possible']
      
    function sentInput(){
           var outPut = [  ]
            
           for (var i = 0; i < sentInputArray.length; i++){
                var Input = sentInputArray[i]
                 var midTree = Input.charAt(0)

                 outPut.push(midTree)

               
                 //console.log(outPut)

                

                
  

            }
            return outPut
        }
        
        // console.log(sentInput())

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
    // console.log(fruits)
    
    // Q6: Loop over an array of names and log the first and last initial of each person
    // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
    // - Output: ['SE', 'RL', 'SPL', 'WPL' ]
   //sperate first Initial
    //log the first
var nameLst = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
function lstInitial(arr){
    var outPut = [];
    for(var i = 0; i < arr.length; i++){      
        var nameSplt = arr[i].split(' ');
        var initials = ' ';
        var spltName = nameSplt[0];
        var middle = spltName[0]

        console.log(spltName);
        console.log(nameSplt);
         console.log(middle)
         var middle = initials

    for( var j = 0; j < nameSplt.length; j++){
        var currentName = nameSplt[j];
        var initial = currentName [0];
         initials = initials + initial

            }
            outPut.push(initials);
    }
    return outPut 
}

console.log(lstInitial(nameLst))