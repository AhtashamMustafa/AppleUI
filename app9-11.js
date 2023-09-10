// Q1
let cities=prompt("Write the name of city")

if (cities == "karachi"){
    alert("Welcome to the city of Lights")
}

// Q2
let gender=prompt("Write your gender")

if (gender !== "Male"){
    alert("Good Morning Ma'am")
}else {
    alert("Good Morning Sir")
}
// Q3

let signalColor=prompt("Wrtite signal color")

if (signalColor == "red"){
    alert("Must Stop")
}else if(signalColor == "yellow"){
    alert("Ready to Move")
}else {
    alert("Move now")
}

// Q4
var litres=+prompt("How many litres of fuel left")
if (litres == 0.25) {
    alert("Please refill the fuel in your car")
} else {
    alert("You are good to go. Do not worry about the fuel")
}

// Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals")
}

if (true){
    alert("true")
}

if (false){
    alert("False");

}
if("car" < "cat"){
    alert("car is smaller than cat")
}

// Q6
document.write("<h2>Marks Sheet</h2>")
var obtainedMarks=+prompt("Please enter the sum of your obtained Marks in three subject")
var totalMarks= 300
var percentage=(obtainedMarks/totalMarks)*100
if (percentage >= 80) {
    document.write("Total Marks: "+totalMarks)
    document.write("</br>")
    document.write("Marks Obtained: "+obtainedMarks)
    document.write("</br>")
    document.write("Percentage: "+percentage+"%")
    document.write("</br>")
    document.write("Grade: A-One")
    document.write("</br>")
    document.write("Remarks: Excellent")
} else if (percentage < 80 && percentage >= 70) {
    document.write("Total Marks: "+totalMarks)
    document.write("</br>")
    document.write("Marks Obtained: "+obtainedMarks)
    document.write("</br>")
    document.write("Percentage: "+percentage+"%")
    document.write("</br>")
    document.write("Grade: A")
    document.write("</br>")
    document.write("Remarks: Good")
}else if (percentage < 70 && percentage >= 60) {
    document.write("Total Marks: "+totalMarks)
    document.write("</br>")
    document.write("Marks Obtained: "+obtainedMarks)
    document.write("</br>")
    document.write("Percentage: "+percentage+"%")
    document.write("</br>")
    document.write("Grade: B")
    document.write("</br>")
    document.write("Remarks: You need to improve")
}else if (percentage < 60) {
    document.write("Total Marks: "+totalMarks)
    document.write("</br>")
    document.write("Marks Obtained: "+obtainedMarks)
    document.write("</br>")
    document.write("Percentage: "+percentage+"%")
    document.write("</br>")
    document.write("Grade: Fails")
    document.write("</br>")
    document.write("Remarks: Sorry")
}

// Q7
var secretNumber=9
var guessedNumber= +prompt("Guess the Number between 1 to 10")
if (guessedNumber == secretNumber) {
    alert("Bingo! Correct Answer")
} else if (++guessedNumber == secretNumber) {
    alert("Close enough to the Correct Answer")
}else{
    alert("Try Again")
}
    
// Q8
var number = +prompt("Enter the number to check it is divisble with 3 or not")
if (number%3 == 0){
    alert("It is divisble by 3")
}else{
    alert("This no is not divisble by 3")
}

// Q9
var number = +prompt("Enter the number to check it is even or odd")
if (number%2 == 0){
    alert("It is even")
}else if(number == 1){
    alert("It is Odd")
}else{
    alert("It is Odd")
}

// Q10
var temp=+prompt("Enter the temperature")
if (temp >= 40) {
   alert("It is too hot outside.") 
}else if (temp >= 30 && temp < 40) {
    alert("The Weather today is Normal.")
} else if (temp >= 20 && temp < 30) {
    alert("Today's Weather is cool.") 
}else if (temp >= 10 && temp < 20) {
    alert("OMG! Today's weather is so Cool.") 
}

// Q11
var number1=+prompt("Enter the 1st number")
var operator=prompt("Enter the operator you want to use +,-,*, / & %")
var number2=+prompt("Enter the 2nd number")
if (operator == "+") {
    alert(number1+number2) 
}else if (operator == "-") {
    alert(number1-number2)
} else if (operator == "*") {
    alert(number1*number2) 
}else if (operator == "/") {
    alert(number1/number2) 
}else if (operator == "%") {
    alert(number1%number2)
}