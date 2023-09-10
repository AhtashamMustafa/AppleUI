
// function prc(a) {
//     if(a == 10){
//         return 5;
//     }
//     else if(a == 5){
//         return 10;
//     }
// }
// console.log(prc(10))
// function sum (sum1){
//     return (sum1 * (sum1 + 1))/2
// }
// console.log(sum(6))
// function fun(lift1,lift2,userFloor){ 

//     if ((lift1 - userFloor)*-1 > (lift2 - userFloor)*-1 ){
//         return "lift2"
//     }else {
//         return "lift1"
//     }
// }
function fun(lift1,lift2,userFloor){ 

    let cal1 = Math.abs(lift1-userFloor) 
    let cal2 = Math.abs(lift2-userFloor) 
    if (cal1 <= cal2){
        return "lift1"
    }else if(cal2 < cal1){
        return "lift2"
    }

    // if ((lift1 - userFloor)*-1 > (lift2 - userFloor)*-1 ){
    //     return "lift2"
    // }else {
    //     return "lift1"
    // }
}

console.log(fun(6,9,4))