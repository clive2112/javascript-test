console.log("testing code runner");
console.log("hello world");
var product = 2.0 * 2.5;
console.log(product);
var myStr = "I am \"the walrus\" by a band called \"the beatles\" ";
console.log(myStr);
myStr += " Writers credit to: Lennon & McCartney";
console.log(myStr);
var myName = "Clive";
var mySur = "My name is " + myName + " Creevey";
console.log(mySur);
var anAdjective = " Trainee Coder!"
mySur += anAdjective;
console.log(mySur);
var myArray = ["Clive", "Trainee", 52];
console.log(myArray);
var myData = myArray[2];
console.log(myData);
myArray[1] = "Male";
console.log(myArray);
myArray.push(["Beginner"])
console.log(myArray);
var removedFromArray = myArray.shift();
console.log(myArray);
console.log(removedFromArray);
myArray.unshift("Edward");
console.log(myArray);
function ourReusableFunc() {console.log(myArray);}
ourReusableFunc();
ourReusableFunc();
ourReusableFunc();
ourReusableFunc();
function ourFunctionWithArgs(a,b) {console.log(a - b);}
ourFunctionWithArgs(8, 4);
console.log(ourFunctionWithArgs);
function myLocalScope () { 
    var myVar = 9;
console.log(myVar);
}
myLocalScope();


function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, it's true"
    }
    return "No, it's false"
   
}
console.log(trueOrFalse(false));

function lessOrEqual(val) {
    if (val <=9) {
        return "Smaller or equal to 9";}
        return "greater than 9";
    
}
console.log(lessOrEqual(6));
console.log(lessOrEqual(10));
console.log(lessOrEqual(9));
var names = ["Hole in One!", "Eagle", "Birdie", "Par", "Bogey", "Double B", "Fucked"]
function golfScore (par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names [1]
    } else if (strokes == par - 1) {
        return names [2]
    } else if (strokes == par ) {
        return names [3]
    } else if (strokes == par + 1) {
        return names [4]
    } else if (strokes == par + 2) {
        return names [5]
    } else (strokes >= par + 3) 
        return names [6]
    }


console.log(golfScore(5,4));
console.log(golfScore(3,4));
console.log(golfScore(4,7));