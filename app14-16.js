// Q1
// let student=[]
// Q2
// let students={}
// Q3
// let str_Array=["A","B","C","D","E"]
// Q4
// let num_Array=[1,2,3,4,5]
// Q5
// let boolean_Array=[true,false]
// Q6
// let mixed_Array=["a",1,true]
// Q7
// document.write("<h1>Qualifications</h1>")
// let qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
// document.write ("1) "+qualifications[0]+"</br>")
// document.write ("2) "+qualifications[1]+"</br>")
// document.write ("3) "+qualifications[2]+"</br>")
// document.write ("4) "+qualifications[3]+"</br>")
// document.write ("5) "+qualifications[4]+"</br>")
// document.write ("6) "+qualifications[5]+"</br>")
// document.write ("7) "+qualifications[6]+"</br>")
// document.write ("8) "+qualifications[7]+"</br>")
// document.write("</br>")

// Q8
// var studentNames=["Micheal","John","Tony"]
// var studentScore=[310,450,260]
// var totalMarks = 500
// var per1=(studentScore[0]/totalMarks)*100
// var per2=(studentScore[1]/totalMarks)*100
// var per3=(studentScore[2]/totalMarks)*100
// document.write("Score of "+studentNames[0]+" is "+studentScore[0]+". Percentage: "+per1+"%")
// document.write("</br>")
// document.write("Score of "+studentNames[1]+" is "+studentScore[1]+". Percentage: "+per2+"%")
// document.write("</br>")
// document.write("Score of "+studentNames[2]+" is "+studentScore[2]+". Percentage: "+per3+"%")
// document.write("</br>")

// Q9
// let color=["Red","Green","Blue"]
// document.write(color+ "</br>")
// color.unshift(prompt("Which color you want to add in the begining of list?"))
// document.write(color+ "</br>")

// color.push(prompt("Which color you want to add in the end of list?"))
// document.write(color+ "</br>")

// color.unshift(prompt("Which two color you want to add in the begining of list?"))
// document.write(color+ "</br>")

// color.shift()
// document.write(color+ "</br>")

// color.pop()
// document.write(color+ "</br>")

// var indexNum=prompt("At which index you want to add color?")
// var colorName=prompt(`Write the color name you want to add at ${indexNum}color?`)
// color.splice(indexNum,0,colorName)
// document.write(color+ "</br>")

// var deleteNum=prompt("At which index you want to delete the color?")
// var colorQuantity=prompt("How many colors you want to delete?")
// color.splice(deleteNum,colorQuantity)
// document.write(color+ "</br>")

// Q10
// let studentScores=[888,940,745,255]
// document.write("Students Score: "+studentScores+"</br>")
// document.write("Ordered Score of Students: "+studentScores.sort())

// Q11
// let cities=["Karachi","Lahore","Islamabd","Murree"]
// let selectedCities=cities.slice(0,2)
// document.write("Cities List:"+ "</br>")
// document.write(cities+ "</br>")
// document.write("</br>")
// document.write("Selected Cities List"+ "</br>")
// document.write(selectedCities+ "</br>")

// Q12
// let arr1=["This","is","my","Cat"]
// let string=arr1.join(" ")
// document.write("Array:"+ "</br>")
// document.write(arr1+ "</br>")
// document.write("</br>")
// document.write("String:"+ "</br>")
// document.write(string+ "</br>")

// Q13
// let devices=[]
// devices.push("Keybaord")
// devices.push("Mouse")
// devices.push("LCD")
// devices.push("Printer")
// document.write("Device:"+ "</br>")
// document.write(devices+ "</br>")
// document.write("</br>")
// let device1=devices.shift()
// let device2=devices.shift()
// let device3=devices.shift()
// let device4=devices.shift()
// document.write("Out:"+ "</br>")
// document.write(device1+ "</br>")
// document.write("Out:"+ "</br>")
// document.write(device2+ "</br>")
// document.write("Out:"+ "</br>")
// document.write(device3+ "</br>")
// document.write("Out:"+ "</br>")
// document.write(device4+ "</br>")

// Q14
// let accessories=[]
// accessories.push("Keybaord")
// accessories.push("Mouse")
// accessories.push("LCD")
// accessories.push("Printer")
// document.write("Device:"+ "</br>")
// document.write(accessories+ "</br>")
// document.write("</br>")
// let accessories1=accessories.pop()
// let accessories2=accessories.pop()
// let accessories3=accessories.pop()
// let accessories4=accessories.pop()
// document.write("Out:"+ "</br>")
// document.write(accessories1+ "</br>")
// document.write("Out:"+ "</br>")
// document.write(accessories2+ "</br>")
// document.write("Out:"+ "</br>")
// document.write(accessories3+ "</br>")
// document.write("Out:"+ "</br>")
// document.write(accessories4+ "</br>")

// Q15
// let phone= ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write("<select id= phoneSelect>")
// document.write(`<option value = Apple > ${phone[0]}</option>`)
// document.write(`<option value = Samsung > ${phone[1]}</option>`)
// document.write(`<option value = Motorola > ${phone[2]}</option>`)
// document.write(`<option value = Nokia > ${phone[3]}</option>`)
// document.write(`<option value = Sony > ${phone[4]}</option>`)
// document.write(`<option value = Haier > ${phone[5]}</option>`)