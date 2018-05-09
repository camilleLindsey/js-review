/*Hey Prepstars!!!  By now, you should have a good understanding of the basics of Javascript. 

The following exercises will be a good review of the materials we covered in class. Run node in your terminal to test your code.

Don't forget to commit and push your work after each completed exercise.

Now, unleash your coding beast!

/*1.  Variables with a String as their value.
Declare variables named yourName, neighborName, teacherName.  Console log each variable.*/
var yourName = "camille";
console.log(yourName );
var neighborName = "sara";
console.log(neighborName);
var teacherName = 'vic';
console.log(teacherName);

/*2. Variable with a Number as their value.
Declare variables named numberOfFloorsBurjKhalifa, TokyoOlympicsYear. Please assign the actual data for each variable.
Console log each variable.*/
//var x = "numberOfFloorsBurjKhalifa";
//console.log(x.length);
var numberOfFloorsBurjKhalifa = 164;
console.log(numberOfFloorsBurjKhalifa);
var TokyoOlympicsYear= 1964;
console.log(TokyoOlympicsYear);

/*3. Variables with Boolean values
Declare variables named lovesPrepClass, eatsDonuts, drinksGin.  Console log each variable.*/
var lovesPrepClass = true;
console.log(lovesPrepClass);
var eatsDonuts = false;
console.log(eatsDonuts);
var drinksGin = false;
console.log(drinksGin);

/*4. Variable with Null values
Declare variables named completedCodingChallenge, traveledToSpace.  Console log each variable*/
var completedCodingChallenge = null;
console.log(completedCodingChallenge);
var traveledToSpace = null;
console.log(traveledToSpace);
/*5.  Variables with Array for its value.
Declare a variable named japanPrefectures and assign the value of any 5 prefectures in Japan.
Console log the variable 
Console log the value at index 1.
Console log the value at index 3.*/
var japanPrefectures = ["Tokyo", "Kyoto", "Osaka", "Hokkaido", "chiba", "Okinawa"];
console.log(japanPrefectures);
//var preFic1 = [japanPrefectures [1]];
//console.log(preFic1);
console.log(japanPrefectures[1]);
//var preFic2 = [japanPrefectures [3]];
//console.log(preFic2);
console.log(japanPrefectures[3]);

/*6.  Variable with Array for its value.
Declare a variable named planets and assign the value of each planet in our solar system, in the order of distance from the sun.  
Console log the variable
Console log "Earth" using the index position
Console log "Uranus" using the index position*/
var planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
console.log(planets);
console.log(planets[2]);
console.log(planets[6]);
//var iI = [planets[2]];
//console.log(iI);
//var aI = [planets[6]];
//console.log(aI);

/*7. Variables with Array for its value.
Declare a variable named india and assign the value of 3 popular tourist attractions.  
Console log the variable.*/
var india = ['Delhi', ' Agra',  ' Jaipur'];
console.log(india);


/*8. Adding new elements to an array.
Add another popular tourist attraction to the india variable from position 1 of the index.
(hint, it is not the push() method). Console log the variable.*/
//tip* answer
//How to insert an item into an array at a specific index?
//splice function on the native array object.
//india.splice(index, 0, item); will insert item into india at the specified index (deleting 0 items first, that is, it's just an insert).


//console.log(india.join());
india.splice(1, 0, " Varanasi");
console.log(india.join());

/*9. Removing the last element from an array.
Using the same india variable, remove the last element from the array. Console log the variable. */

//var india = ['Delhi', 'Varanasi', 'Agra',  ' Jaipur'];
var indiaA = india.pop();    
console.log(indiaA);
console.log(india);


/*10. Removing an element from an array into a new array. 
Remove the first two elements in the snacks array and return a new array.
Console log the new variable. */

var snacks = ["peanut butter cup oreo", "birthday cake oreo", "banana split oreo", "watermelon oreo", "cookie dough oreo", "creamsicle oreo"];
snacks.shift();
console.log(snacks);


/*11. Declare two variables with names of your choosing and use the triple comparison operator (===) to compare:
a) two strings "Racecar" and "racecar"
b) a string and a number "three" and 3

console log each variable*/

var car1 = "Racecar" === "racecar";
console.log(car1);
var car2 = "three" === 3;
console.log(car2);


/*12.  Declare a literal object named "hotel" with properties and values set to:

    name    => "Hilton"
    rooms   => 200
    pool    => true
    checkIn => null

 console log the object*/

 
var hotel = {
name: "hilton",
rooms: 200,
pool: true,
checkIn: null,
};
console.log(hotel);




/*13.  Declare a literal object named "car" with properties and values set to:

    make  => "BMW"
    model => "X5"
    year  => 2015
    doors => 4

 console log the object*/

var car = {
    make: "BMW",
    model: "X5",
    year: 2015,
    doors: 4, 
};
console.log(car);

/*14.  Declare a literal object named bigBox and set its value to be an empty object.

Add a property named size and set it to a random number value between 0 and 50 (hint, use Math.something...)
Add a property named color and set it to any color.
Add a property named contents and set it to be an empty array

console log the object*/

var bigBox = {};
//math.random();
bigBox.math = 50;
bigBox.color = 'pink';
bigBox.contents = [];

console.log(bigBox);

/*15.  Declare a literal object named "colorMeBadd" with properties and values set to:

   iro        => [literal object]

                  akai      => 'red'
                  aoi       => 'blue'
                  midori    => 'green'
                  shiroi    => 'white'
                  pinku     => 'pink'
                  murasaki  => 'purple'

   isJapanese => true              

console log the object */ 

var colorMeBadd = {
    
    akai: 'red',
    aoi: 'blue',
    midori: 'green',
    shiroi: 'white',
    pinku: 'pink',
    murasaki: 'purple',
    isJapanese: true,

};
console.log(colorMeBadd);
/*16. As the general manager for the DevLeague Prep Beer Pong Team, your job is to select the starting players from the roster array. Create two variables, Ateam and Bteam and assign each an empty array. You will then assign players that have an even number index position to the Ateam and odd number index position to the Bteam. Let the games begin! Console log the results.*/

var roster = ["Alex", "Laura", "Sami", "Jasmine", "Adam", "Dakota", "Jonathon", "Luther", "Kevin", "Vic"];
var Ateam = [];
var Bteam = [];

// even team

for(var i = 0; i<roster.length; i++){
    //console.log(roster[i]);
       if(i%2 ===1){
          Ateam.push(roster[i]);
         }
      }
        console.log(Ateam); 

//odd team


for(var i = 0; i<roster.length; i++){
  
    //console.log(roster[i]);
    
    if(i%2 ===0){
      Bteam.push (roster[i]);
    }
   }
   console.log(Bteam); 



/*17. Using the japanPrefectures array you created in exercise 5, create a for loop that iterates through this array and console logs the following message:

"The location at i is:  ."  and append the value of i and the value stored within the Array at that index to this string.

i.e. "The locaton at 0 is Tokyo."*/


// var japanPrefectures = ["Tokyo", "Kyoto", "Osaka", "Hokkaido", "Chiba", "Okinawa"];
//  for(var i=0; i<japanPrefectures.length; i++){
//      console.log("The location at " + i + " is: " + japanPrefectures[i] + "." );
//  }





/*18. Declare a function named addUp.
This function will take a number parameter and add up all the numbers from 1 to that number.
The parameter will be any number from 1 to 88.*/

/*19. Declare a variable named oddNumbers and assign it to an empty array
Use a for loop to add only odd numbers to an Array.  Add 30 odd numbers to the oddNumbers variable starting with the value of 1.*/

/*20.  Declare a function named oldEnough.
This function takes in a number parameter age and returns a Boolean value true or false if the age is lower than the minimum legal drinking age in the Antigua. Invoke this function by passing in a number value.  Google search Antigua's minimum drinking age to confirm the number value.  Store the return value to a variable named drinkinAlready and console log this variable*/

/*21. Declare a function named contentFiller which takes in a single parameter which will be an object.  Write a for loop that will put 5 random numbers between the values of 0 to 20 in the contents array in the bigBox object you created in exercise 14.  Console log the result.*/

/*22.  Declare a function named firstReverse which takes a single parameter str.  This function will take a string parameter being passed in and return the string in reverse order.*/

/*23. Declare a function named letterCap which takes a single parameter str. This function will capitalize the first letter of the string you pass in to invoke the function. 
*/

/*24. Declare a function named longestWord which takes a single parameter str. This function will return the longest word in the string when you invoke this function.*/ 
