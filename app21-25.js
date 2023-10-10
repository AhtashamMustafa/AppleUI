// Q1
// var firstName = prompt(`Enter your First Name`)
// var lastName = prompt(`Enter your Last Name`)
// var fullName = firstName+" "+lastName
// var greet = alert(`Welcome ${fullName}`)

// const { it } = require("node:test")

// Q2
// var favPhone= prompt(`Enter your favourite Phone Model`)
// document.write(`My Favourite Phone is: ${favPhone}`)
// document.write("</br>")
// var lengthOfPhone=favPhone.length
// document.write(`Length of String: ${lengthOfPhone}`)

// Q3
// var nationality ="Pakistani"
// var indexOfn=nationality.indexOf("a")
// document.write(`String: ${nationality}`)
// document.write("</br>")
// document.write(`Index of "a": ${indexOfn}`)

// Q4
// var word ="Hello World"
// var indexOfl=word.lastIndexOf("l")
// document.write(`String: ${word}`)
// document.write("</br>")
// document.write(`Index of "L": ${indexOfl}`)

// Q5
// var CharAt3=nationality.charAt(5)
// document.write(`String: ${nationality}`)
// document.write("</br>")
// document.write(`Charater At index 5: ${CharAt3}`)

// Q6
// var firstName = prompt(`Enter your First Name`)
// var lastName = prompt(`Enter your Last Name`)
// var fullName = firstName.concat(" ",lastName)
// var greet = alert(`Welcome ${fullName}`)

// Q7
// var city = "Hyderabad"
// var afterReplacement=city.replace("Hyder","Islam")
// document.write(`City: ${city}`)
// document.write("</br>")
// document.write(`After Replacment: ${afterReplacement}`)

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newString= message.replace(/and/g,"&")
// console.log(newString)

// Q9
// var numString="472"
// var num=parseInt(numString)
// document.write(`Value: ${numString} `)
// document.write("</br>")
// document.write(`Type: ${typeof numString}`)
// document.write("</br>")
// document.write(`Value: ${num}`)
// document.write("</br>")
// document.write(`Type: ${typeof num}`)

// Q10
// var userValue=prompt("Enter the word you want to capitalize")
// var capitalValue=userValue.toUpperCase()
// document.write(`User Input: ${userValue}`)
// document.write("</br>")
// document.write(`Uppercase: ${capitalValue}`)

// Q11
// function capitalizeEveryFirstWord(prompt) {
//     let words = prompt.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     return words.join(' ');
// }
// var userInput=prompt("Enter your Full Name")
// var lowerCase = userInput.toLowerCase()
// var titleCase=capitalizeEveryFirstWord(lowerCase)
// document.write(`User Input: ${userInput}`)
// document.write("</br>")
// document.write(`Titlecase: ${titleCase}`)

// Q12
// var num=35.36
// var string=num.toString()
// var withoutDot=string.replace(".","")
// document.write(`Number: ${num}`)
// document.write("</br>")
// document.write(`Result: ${withoutDot}`)

// Q13
// function specialCharacter(value) {
//     let special = ['@', '.', ',', '!'];
//     for (let i = 0; i < value.length; i++) {
//         if (special.includes(value[i])) {
//             return false;
//         }    
//     }
//     return true;
// }
// var username = prompt("Enter your Username")
// var func =specialCharacter(username)
// if(func){
//     alert("Username is correct")
// }else{
//     alert("Enter a valid Username")
// }

// Q14
// let a = ["cake", "apple pie", "cookie", "chips"]
// let input = prompt("What do you want?").toLowerCase()
// function searchItem (item){
// for (let i = 0; i < a.length; i++) {
//     if (a[i].toLowerCase()== item) {
//         return i;
//     }
// }
// return -1;
// }
// let checkitem=searchItem(input)
// if (checkitem !== -1) {
//     alert(`${input} is available at index ${checkitem} in our bakery `)
// } else {
//     alert(`We are sorry ${input} is not available in our bakery `)
// }

// Q15
// function validPassword(password) {
//     let hasAlphabet = false;
//     let hasNumber = false;
//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
//             hasAlphabet = true;
//         }
//         if(charCode>=48 && charCode<=57){
//             hasNumber=true;
//         }
//     }
//     let startWithNum= /^0-9/g.test(password)
//     let validLength = password.length >=6;

//     return hasAlphabet && hasNumber && !startWithNum && validLength
// }
// let userPassword= prompt("Enter your Password")
// let checkPassword =validPassword(userPassword)
// if(!checkPassword){
//     console.log("Password is not valid")
// }else{
//      console.log("Password is Valid")
// }

// Q16
// var university = "University of Karachi";
// var splitUni = university.split('');
// for (let i = 0; i < splitUni.length; i++) {
//     document.write(splitUni[i] + "<br>")
// }

// Q17
var userInput="Pakistan"
var lastChar= userInput.lastIndexOf()