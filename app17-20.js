// Q1
// const multiArr=[[]];

// Q2
// const multiArr1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(multiArr1[0],"<br>")
// document.write(multiArr1[1],"<br>")
// document.write(multiArr1[2],"<br>")

// Q3
// for (let i=1; i <= 10; i++) {
//     document.write(i +"<br>")  
// }

// Q4
// var table=prompt("Enter the number of which table you want")
// var lenghtOfTable=prompt("Enter the length of table")
// document.write("Multiplication Table of "+table)
// document.write("Length "+lenghtOfTable)
// if (!isNaN(table)){
//     for(let i=1; i<=lenghtOfTable;i++){
//         document.write(table+" X "+i+" = "+(table*i)+"<br>")
// }
// }

// Q5
// let fruit = ['apple', 'banana', 'mango', 'orange','strawberry']
// for (i=0;i<=fruit.length-1;i++){
//     document.write(fruit[i]+"<br>")
// }
// document.write("<br>")
// for (i=0;i<=fruit.length-1;i++){
//     document.write("Element at index "+i+" is "+fruit[i]+"<br>")
// }

// Q6
// var counting = ""
// var reverseCounting = "";
// var even = "";
// var odd = "";
// var series = "";
// for (var i = 1; i <= 15; i++) {
//     counting += i + ", ";
// }
// document.write("Counting: "+counting+"<br>"+"<br>")
// for (var i = 10; i > 0; i--) {
//     reverseCounting += i + ", ";
// }
// document.write("Reverse Counting: "+reverseCounting+"<br>"+"<br>")
// for (var i = 0; i <= 20; i+=2) {
//     even += i + ", ";
// }
// document.write("Even: "+even+"<br>"+"<br>")
// for (var i = 1; i <= 20; i+=2) {
//     odd += i + ", ";
// }
// document.write("Even: "+odd+"<br>"+"<br>")
// for (var i = 2; i <= 20; i+=2) {
//     series += i + "k, ";
// }
// document.write("Series: "+series+"<br>"+"<br>")

// Q7
// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var input =prompt("Welcome to bakery. What do you want sir/Madam?")
// var input1=input.toLowerCase()
// var foodNa=false
// var counter;
// var food;

// for(let i=0; i < A.length;i++){
//     if (A[i] == input1){
//         foodNa=true 
//         counter=i
//         food =A[i]
// }}
// console.log(foodNa)
// if(foodNa){
//     alert(food+" is available at index "+counter+" in our bakery")
// }else{
//     alert("We are sorry "+input+" is not available in our bakery")
// }

// Q8
// let b=[24,53,78,91,12]
// let largest=b[0]    //Assuming first value is the largest than compare it one by one to the array
// for(let i=0;i < b.length; i++){
//     if(b[i] > largest ){
//         largest=b[i]
//     }
// }
// document.write("Array Items: "+b+"<br>")
// document.write("The largest no in the given array is : "+largest+"<br>")

// Q9
// let smallest=b[0]    //Assuming first value is the smallest value than compare it one by one to the array
// for(let i=0;i < b.length; i++){
//     if(b[i] < smallest ){
//         smallest=b[i]
//     }
// }
// document.write("The smallest no in the given array is : "+smallest)

// Q10
// let multiple=""
// for (var i = 5; i <= 100; i+=5) {
//     multiple += i + ", ";
// }
// document.write("Multiple of five: "+multiple+"<br>"+"<br>")
