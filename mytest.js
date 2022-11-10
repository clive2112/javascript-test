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

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;  
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        case 5:
            answer = "assbag";
            break;    
        default:
            answer = "WTF"
            break;
    }
    return answer;
}

console.log(caseInSwitch(3))
console.log(caseInSwitch(2))
console.log(caseInSwitch(5))
console.log(caseInSwitch(1))
console.log(caseInSwitch(4))
console.log(caseInSwitch(8))

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            
        case 2:
              
        case 3:
            answer = "gamma";
            break;
        case 4:
            
        case 5:

        case 6:
            answer = "assbag";
            break;    
        default:
            answer = "WTF"
            break;
    }
    return answer;
}

console.log(caseInSwitch(3))
console.log(caseInSwitch(2))
console.log(caseInSwitch(5))
console.log(caseInSwitch(1))
console.log(caseInSwitch(4))
console.log(caseInSwitch(8))

function isLess (a, b) {
    return a < b;
}

console.log(isLess(2, 4));
console.log(isLess(8, 4));

var count = 0;
function cc(card) {
    switch(card) {
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:  
      count++;
      break;
      case 10:
            case "J":
                case "Q":
                    case "K":
                        case "A":
        count--;
        break;
     }
     var holdbet = 'Hold'
     if (count > 0) { 
        holdbet = 'Bet'
     }
     return count + " " + holdbet;
}

cc(2); cc('K'); cc(4); cc('A');
console.log(cc(4))

cc('K'); cc('A'); cc('Q'); cc('J');
console.log(cc(0))

var testObj = {
    "hat": "baseball cap",
    "shirt": "cotton",
    "shoes": "Dr Martens"
};

var hatValue = testObj.hat;
var shoesValue = testObj.shoes;
var shirtValue = testObj.shirt;

console.log(testObj.hat)
console.log(testObj.shirt)
console.log(testObj.shoes)