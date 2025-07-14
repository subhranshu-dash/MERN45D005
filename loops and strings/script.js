// for loop
let count = 0;
for(let count = 1; count<=5; count++ ){
    console.log( "bapun bhai")

}
// let i= ;
// let j;
// for( i = 1; i<=7 ; i++){
//     i= i+j
// }
// console.log(j)
// let sum = 0
// for( i = 1; i<=5; i++){
//     sum = sum+i
// }
// console.log(sum)
//while loop
// let i = 1;
// while( i<=5 ){
//     console.log("i = ",i)
//     i++;

    
// }
// do while loop
//  let i = 5
//  do {
//     console.log("i = " , i)
//     i++
//  }while(i<=10);
//for of loop
// let str = "bapunbahi";
// let size = 0;
// for ( let i of str){
//     // console.log("i =" ,i)
//     size++
// }
// console.log("size =" ,size)
// for in loop 
// let student = {
//     name : "rakesh",
//     rollnum : 20, 
//     class : "five" ,

// };
// for( let key in student ){
//     console.log("key =" , key ,"the value of key =" ,student[key])
// }
// // practise qs 
// // print all enen num 1 to 100 odd num
// for( let i =0 ; i<=100 ; i++){
//     console .log("i =" , i)
//     if ( i % 2 !==0){
//         console.log(i)
//     }
// }
//practise 1
//  let score = 20;
//  let grade ;
 
//  if( score>= 90 && score<=100 ){
//     grade = "A"
//  }else if( score >=60 && score <= 70 ){
//     grade = "B"
//  }else if ( score>= 30 && score <= 40){
//     grade = "c"
//  }else if ( score >=20 && score<=30){
//     grade= "f"
//  }
//  console.log( " the final grade = ",grade)

// const mark = prompt("Enter a number");
// if ( mark>=80){
//     console.log("A")
// }else if ( mark>=60){
//     console.log("b")
// }else if ( mark>=30){
//     console.log("c")
// }else{
//     console.log("fail")
// }
// qs 1 get user to input a number multiple by 5
// const num = prompt("Enter a number");

// if( num %5 == 0){
//     console.log (" the number is multiple by 5 " , num)
// }else{
//     console.log("the num is not multiply by 5")
// }
// ternary operator
// syntax of ternary operator
// (code ? for true : for false)
const number = prompt("Enter a number");
console.log(number%5 == 0 ? " divisible by 5" : " not divisible by 5")