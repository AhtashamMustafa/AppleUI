// Q1
var age=23
alert("I am "+age+" years old")
// Q2
var visitorVisit=14
var text="You have visited this site"
var text1=" times"
// This can be done through 2 methods

// alert("You have visited this site "+visitorVisit+" times" )

// 2nd Method
alert(text.concat(visitorVisit,text1))
// Q3
var birthYear=2000
document.write("My Birth year is "+birthYear)
document.write("<br>")
document.write("Data type of my declared variable is number")
// Q4
var visitorName;
visitorName="John Doe"
var productTitle;
productTitle="T-Shirt(s)"
var quantity;
quantity=5
var message=visitorName.concat(" ordered "+quantity+""+productTitle,"on XYZ Clothing Store")
document.write("<br>")
document.write(message)

