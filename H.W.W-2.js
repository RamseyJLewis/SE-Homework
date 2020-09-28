// ///////////////////////////////////////9.22.20/////////////////////////////////////////////
// // Q1: Create a loop that greets us 5 times!
// //      - The console should similar to the following:
// //          - Hi!
// //          - Hi!
// //          - Hi!
// //          - Hi!
// //          - Hi!
// var str = 'Hi!'

// function greeting(){
//     for( var i = 0; i < 5; i++){
//         //console.log('Hi!')
//     }
//     return 'loop'
// }

// //console.log(greeting())
    



// // Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
// //      - The console should similar to the following:
// //          - Loop Count: 1
// //          - Loop Count: 2
// //          - Loop Count: 3
// //          - Etc.. based on the max value parameter\
// function loop (){
//     for (var i = 1; i < 4; i++){
//         //console.log(`Loop Count ${i}`)
//     } 
// }

// //console.log(loop())

// // Q3: Loop over the following array and console.log the current index value
// //      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
// //      - The console should similar to the following:
// //          -   Zeus
// //          -   Hades
// //          -   Hermies
// //          -   Poseidon
// var gods = ['Zeus', 'Hades', 'Hermies', 'Poseidon']

// function godsList(){
//     for (var i = 0; i < gods.length; i++){
//         console.log(godsList[i])
//     }
//     return 'allGodsLogged'
// }

// ////console.log(godsList())

// // Q4: Loop over an array of strings and return a new array of single letter strings
//     // Input:    ['As', 'Soon', 'As' 'Possible']
//     // Output: ['A','S','A','P']
//         // make array =D
//         // make function =D
//         //get the length of arrray in function =D
//         // seperate each element of the array
//         // get first letter of each element of function
//         //log

//  var  sentInputArray = ['As', 'Soon', 'As', 'Possible' ]   
// function sentInput(){
//     var outPut = [  ]
//     for (var i = 0; i < sentInputArray.length; i++){
//         var Input = sentInputArray[i]
//         var midTree = Input.charAt(0)
//         outPut.push(midTree)
//     }
//     return outPut
// }      
// //console.log(sentInput())

// // Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
//     // - Input:    ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
//     // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];
//  var fruits = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// function fruitCap(){
//     for (var i = 0; i < fruits.length; i++){
//         var currentFruits = fruits[i];
//         var upperCase = fruits[i].charAt(1).toUpperCase();
//         var endOfSting = currentFruits.slice(2);
//         var newString = fruits[i][0] + upperCase + endOfSting;
//         fruits[i] = newString;
//     }
// }
// fruitCap()
//      //console.log(fruits)
    
//     // Q6: Loop over an array of names and log the first and last initial of each person
//     // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
//     // - Output: ['SE', 'RL', 'SPL', 'WPL' ]
//    //sperate first Initial
//     //log the first


//     var nameLst = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
// function lstInitial(arr){
//     var outPut = [];
  
  
//     for(var i = 0; i < arr.length; i++){      
//         var nameSplt = arr[i].split(' ');//['Samuel] [Pierre] [Louis']
//         var initials =  nameSplt[0][0]; // accumulater, staring with first initals 'S'
//                                                 // nameSplt[0][0]= ['samuel] [S]
    
   
//     for( var j = 1; j < nameSplt.length; j++){
//         var currentName = nameSplt[j]; // Pierre
//         var initial = currentName [0]; // 'P'
//          initials = initials + initial; //'S' + 'P'

//             }
//             outPut.push(initials);
//     }

//     return outPut;

// }

// //console.log(lstInitial(nameLst));

// //////////////////////////////////////9.22.20///////////////////////////////////////////////////////////////////

// // level 0
//     // Declare an object called person. 
//     // Give the person several properties, including full name, height, and more
//     // You'll be using this object for the remaining questions.
//     var Ramiel  = {
//         fullName: 'Ramiel, Bravery',
//         eyeColor: 'brown', 
//         height : 6,
//         weight: 175,
//         shirt: 'Xl',
//         pantWaist:30,
//         pantInseam:33,
//     }

//     // Q0.1
//         // Add an email key value pair to the object called person
//     Ramiel ['email'] = 'Ramiel.Bravey@gmail.com'
//     // console.log(Ramiel)
 
// // level 1
//     // Q 1.1    
//         // Write some code that extracts the end of the email address
//         // Log that to the console 
//         //Ramiel.length = 5;
//    // console.log(Ramiel.email.slice(13, 23));

//     let endOfEmail = Ramiel.email.split('@')[1]
//     // console.log(('@') + endOfEmail)
       
   

// // level 2
//     // Q 2.1
//         // write a conditional statement which checks if the person is 5'11", shorter, or taller.
//         var davidBeck = 511
//         var height = 512 // If the person is the same log, "Same height as Beckham" 
//         // If the person is taller log, "Taller than Beckham"
//         // If the person is shorter log, "Shorter than Beckham"
//             // hint there are 12 inches in a foot, you may want to convert the height into only inches
//             // if ( height === davidBeck){
//             //     console.log("Same height as Beckham" )
//             // } else if ( height > davidBeck){
//             //     console.log("Taller than Beckham")}
//             //  else if (height < davidBeck){
//             //     console.log("Shorter than Beckham")
//             //  }


           
//     // Q 2.2
//         // Create a function which takes in an object 
//         // If the object doesn't have a specific key return 'No such value'.
//         // If it does, return that key's value. 

//     function hasValue(obj, str){
//         if(obj[str] !== undefined){
//             return obj[str];
//         } else {
//             return 'No such value';
//         }


//      }
//     console.log(hasValue(Ramiel, 'height'))

// // level 3
//     // Q 3.1
//         // Using the full name property, get the person's initials.
     
//         // Create a new key called initials.
//         // Set the value of this key to the person's initials.
//             // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"
//             Ramiel.length = 5;
//             var firstInitial = (Ramiel.fullName.slice(0, 1));
//             var lastInitial = (Ramiel.fullName.slice(8, 9));
//             var initials = firstInitial + [','] + lastInitial
//             // console.log(initials)
    
//             Ramiel['Initials'] = initials
//             // console.log(Ramiel)

//             function multiply(a, b){
//                 a * b
//               }
              ////////////////////////////////////////9.25.20////////////////////////////////////////////

              
              let person = {
                  //created an object 
                  fullName: 'Jack Black',
                  height: `5'00"`,
                  profession: 'Actor',
                  hairColor: 'Brown', 
                  age: '51',
                  broke: false,
              }
                  // all the properties held by this object blue are the keys orange are the values
   
    // Q0.1
        person.email = 'JackBlack@yahoo.com';
        //TO THE ONJECT OF person and KEY OF email SET VALUE TO 'JackBlack@yahoo.com';
        
        
        // level 1
    // Q 1.1    
                let endOfEmail = person.email.split('@')[1];
              // SET endOfEmail EQUAL OBJECT person VALUE email SPLIT IN HALF AT @
        
                 
             
          
          // level 2
              // Q 2.1
                  // write a conditional statement which checks if the person is 5'11", shorter, or taller.
                  var davidBeck = 511
                  //SET 'davidBeck' to number '511'
                  var height = 512 
                  //SET 'height to numer '512'
                  function heightConverter(str){
                      //CREATE A FUNCTION heightConverterv TO THE ARGUMENT OF str
                    let feet = Number(str.split("'")[0]);
                    //SET feet to the NUMBER OF str SPERTAED WITH ' AT INDEX OF 0 
                    let inches = Number(str.split("'")[1].slice(0, -1));
                    //SET inches to the NUMBER OF str SPERTAED AT ' AT INDEX OF 1 SLICED AT 0 THROUGH -1
                    person.heightInInches = inches + (feet*12);
                    //OBJCET person with VALUE height InInches IS EQUVIVILANT TO inches STRING PLUS STRING feet TIMES 12
                    // console.log(person.heightInInches)
                }
    
                heightConverter(person.height);
                // console.log(person.heightInInches);
                      
                // if ( height === davidBeck){
                //         //   console.log("Same height as Beckham" )
                //     //IF THE height IS STRICKLY EQUAL TO davidBeck SEND TO CONSOLE LOG
                //        else if ( height > davidBeck){
                //         //   console.log("Shorter than Beckham")}
                //     //IF THAT DOSE'NT APPLY AND height IS LESS THAN davidBECK SEND 'Shorter than Beckham' to log
                //     //    else if (height < davidBeck){
                //         //   console.log("Taller than Beckham")
                //          }
                //        }
                //     }
                       //IF NEITHER PPLY AND height IS GREATER THAN davidBECK SEND 'Taller than Beckham' to log
          
                     
              // Q 2.2
            function hasValue(obj, str){
            //CREATED A FUNCTION  hasValue WITH THE ARGUMENTS OF (obj, str)
                if(obj[str] !== undefined){
                //IF THE OBJECT HAS A STRING AND DOSE NOT LOOSLEY EQUAL undefined
                      return obj[str];
                // THEN RETURN IT TO THE FUNCTION
                  } else {
                      return 'No such value';
                //IF THAT DOES NOT APPLY RETURN 'No such value' to function
                  }
          
          
               }
            //   console.log(hasValue(Ramiel, 'height'))
            //   console.log(hasValue(Ramiel, 'height'))       
            //    console.log(initialCreator(person));
              //LOG initialCreator AND INVOKE IT WITH THE OBJECT person 
          
          // level 3
              // Q 3.1
                    
                      function initial(person){
                        // RUN FUNCTION initial WITH ARGUMENT OF person
                        var nameSplt = person['fullName'].split(' ');
                        //SET nameSplt TO THET EQUVULANT OF THE OBJECT person KEY OF fullName split AT THE SPACES
                        var initials2 = '';
                        //SET initials2 TO ''
                        for(var j = 0; j < nameSplt.length; j++){
                        //SET j TO 0, j IS ALSO GREATER THAN nameSPLT's length; add 1 to j each run through 
                          var name = nameSplt[j];
                          //name IS EQUAL TO nameSplt AT THE INDEX OF j
                          var initial = name[0];
                          //initial IS EQUAL TO name AT THE INDEX OF 0
                          initials2 = initials2 + initial;
                          //initials2 IS EQUIVULANT TO initials2 and initials combined
                        }
                        return initials2;
                        //return initials2 to the function
                    }
                    // console.log(initial(person));
                    //INVOKE initlas WITH person AND SEND IT TO THE CONSOLE
            // Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
 ///////////////////////////// PART 3:


 ///////  Counting sheep.../////////////////////////////////////////////////////////////////


//  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    

function countSheeps(arrayOfSheep) {
   
    let count = 0
   
        for( i = 0; i  <  arrayOfSheep.length; i++){

         let stringOfSheep = arrayOfSheep[i]  
        
            if(stringOfSheep == true ){

                 count++
            } 
        }    
    return count 
}
   
console.log(countSheeps(array1))
 


  /////// Grasshopper - Summation ///////////////////////////////////////////////////////

//  Write a program that finds the summation of every number from 1 to num. 
//  The number will always be a positive integer greater than 0.

var summation = function (num) {
    let addArr = 8
    for (i = 0; i < num.length; i++) {
        
       addArr + num[i];
    }
    return addArr
  }

  console.log(summation(8), 36)

   ///////Square(n) Sum///////////////////////////////////////////////////////

   //Complete the square sum function so that it squares each number passed into it 
   //and then sums the results together.
   //For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
   
   function squareSum(numbers){

}

   ///////Basic Mathematical Operations///////////////////////////////////////////////////////

//    Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2)
{
  if (operation == '+') return value1 + value2;
  if (operation == '-') return value1 - value2;
  if (operation == '*') return value1 * value2;
  if (operation == '/') return value1 / value2;

}

//console.log(basicOp('+', 4, 7));

///////////////////////////// PART 4:
// filter questions

// Level 0
    // given an array of numbers filter out any that are larger than 10
    lv10Numbers = ['2', '4' ,'12' ,'28' ]
    lv0Answer = lv10Numbers.filter(function(zero){ return zero < 10})
//    console.log(lv0Answer)

// Level 1
    // given an array of numbers filter out any that are divisible by 3
    lv12Numbers = ['2', '4' ,'12' ,'28', '6' ]
    lv12Answers =lv12Numbers.filter(function(one){return one %3 !== 0 })
    //  console.log(lv12Answers)
    // given an array of nubers filter out any that are even
    lv13Numbers = ['2','3','4','5','6']
    lv13Answers =lv13Numbers.filter(function(two){return two %2  === 1 })
    //  console.log(lv13Answers)
// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
    let fruit = ['mango','kiwi', 'apple']
    longFruit = fruit.filter(function(n){
        return n.length < 5
    })
    // console.log(longFruit)

    // given an array of arrays, filter out any that are shorter than 10 elements
    let plants = [['tree'],['bush','grass'],[1,2,3,4,5,6,7,8,9,10,11]]
    longPlants = plants.filter(function(n){ return n.length >= 10})
    // console.log(longPlants)


// Level 3
    // given an array of objects, filter out any that dont have a key called 'firstName'

// reduce questions 
// level 0:
    // given an array of numbers add them all together

// level 1:
    // given an array of numbers, multiply them all together

// level 2:
    // given an array of strings, concatiante them together 

// level 3: 
    // given an array of arrays make them all into one array 

// level 5:
    // given an array of strings, remove any vowels and concatenate them toegher 


// map questions
// level 0:
    // given an array of numbers, return a new array with all numbers multiplied by 2

// level 1:
    // given an array of numbers, return a new array with all numbers increased by 1

// level 2:
    // given an array of strings, return a new array with all strings as capitals


    
