let score="33"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber=Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)
/*Now if change the value of the score to "33abc" then when we change
the data type of that string then it will be converted to number and when we 
check the type of that number it is a number but when we print that 
number it will print "NaN"-> Not a number */

let score1="33abc"
console.log(typeof score1);
let valueInNumber1=Number(score1);
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

//If the value of the score is null then if we convert it to the number then it will give the output as 0
//If the value of the score is true the the output will be 1 and if the output is false then the output is 0

//"33"=>33
//"33abc"=>NaN
//Null=>0
//true=>1
//false=>0
//1=>true ; 0=>false 
//""=>false//Boolean() is used
//"Div"=>true
//String()
//We can see the difference with the help of the example
