// Q1
var a=10
document.write("Result:")
document.write("<br>")
document.write("The Value of a is "+a)
++a 
document.write("<br>")
document.write("<br>")
document.write("The Value of ++a is "+a)
document.write("<br>")
document.write("Now Value of a is "+a)
document.write("<br>")
document.write("<br>")
document.write("The Value of a++ is "+a)
a++ 
document.write("<br>")
document.write("Now Value of a is "+a)
--a
document.write("<br>")
document.write("<br>")
document.write("The Value of --a is "+a)
document.write("<br>")
document.write("Now Value of a is "+a)
document.write("<br>")
document.write("<br>")
document.write("The Value of a-- is "+a)
a--
document.write("<br>")
document.write("Now Value of a is "+a)
//Q2
var a=2
var b=1
var result=--a - --b+ ++b + b--
document.write("<br>")
document.write("<br>")
document.write("a = "+a)
document.write("<br>")
document.write("b = "+b)
document.write("<br>")
document.write("Result = "+result)
document.write("<br>")
document.write("At --a value is 1")
document.write("<br>")
document.write("At --a - --b value is 1 - 0 = 1")
document.write("<br>")
document.write("At --a - --b + ++b value is 1 - 0 + 2 = 3")
document.write("<br>")
document.write("At --a - --b + ++b + b-- value is 1 - 0 + 2 + 0 =3 ")
// Q3
var greet=prompt("Please write your name below")
alert("Welcome "+greet)
// Q5
var number=prompt("Write num to get desired table") || 5;
document.write("<br>")
document.write("<br>")
document.write(number + " X 1 = " + (number * 1))
document.write("<br>")
document.write(number + " X 2 = " + (number * 2))
document.write("<br>")
document.write(number + " X 3 = " + (number * 3))
document.write("<br>")
document.write(number + " X 4 = " + (number * 4))
document.write("<br>")
document.write(number + " X 5 = " + (number * 5))
document.write("<br>")
document.write(number + " X 6 = " + (number * 6))
document.write("<br>")
document.write(number + " X 7 = " + (number * 7))
document.write("<br>")
document.write(number + " X 8 = " + (number * 8))
document.write("<br>")
document.write(number + " X 9 = " + (number * 9))
document.write("<br>")
document.write(number + " X 10 = " + (number * 10))
// Q6
let subject1=prompt("Subject 1 Name")
let subject2=prompt("Subject 2 Name")
let subject3=prompt("Subject 3 Name")
var totalMarks=100
var obtainedMarks1=parseFloat(prompt("Enter obtained marks for "+subject1))
var obtainedMarks2=parseFloat(prompt("Enter obtained marks for "+subject2))
var obtainedMarks3=parseFloat(prompt("Enter obtained marks for "+subject3))
document.write("Subject              Obtained Marks               Percetage");
document.write(subject1+"          "+obtainedMarks1+"          "+(obtainedMarks1/totalMarks)*100);
document.write(subject1+"          "+obtainedMarks1+"          "+(obtainedMarks1/totalMarks)*100);
document.write(subject1+"          "+obtainedMarks1+"          "+(obtainedMarks1/totalMarks)*100);



