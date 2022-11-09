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
console.log(myVar);