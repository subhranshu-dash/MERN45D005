// for loop
// let count = 0;
// for(let count = 1; count<=5; count++ ){
//     console.log( "bapun bhai")

// }
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
// const number = prompt("Enter a number");
// console.log(number%5 == 0 ? " divisible by 5" : " not divisible by 5")
//practise 
// let gameNum = 30;
// let userNum = prompt("enter a number :");
// while(userNum != gameNum){
//     userNum = prompt(" you enterd wrong number .guss again :")

// }
// console.log("congratulation , you enterd the right number")
// string 
// practise 
//   let product = prompt("laptop")
//   let laptop = 4500 ;
  
//   if(laptop == 4500){
//     console.log("available")
//   }elseif( laptop !== 4500)
//     console.log("not available")

 // practise
//  for( let i = 1; i<=100; i++){
//     if( i%2 == 0){
//         console.log("all the even number :" , i)
//     }
//  }
// const obj ={
//     name: "xyz",
//     age : 40,
//     email: "xyz@gmail.com",
//     password : "xyz123"
// }
// // for in  loops
// for(let key in Object){
//     console.log(key , obj[key])
// }
// // for in loops
// let arr = [1,2,3,4,5];
// for( let idx in arr){
//     console.log(arr[idx])
// }
// // for of loops
// for ( let v of arr){
//     console.log(v)
// 
let a = 10;
console.log(`value is : ${a}`)
let str1 = " this is my name";
console.log(str1[0])
console.log (str1. toUpperCase())
let newString = str1.replace("h" , "s")
console.log(newString)
console.log(str1)
// split method
// let str1 = " rama , syama , hari"
// let strArr = str1 
// task 1
// let user = prompt("Enter a name")
// console.log( `@${name} ${name.length}`  );

// practise
// let str2= "Hello world"
// let count= 1;

// if(v=="a" || v=="e" || v=="i" || v=="o" || v=="u"){
//     count++
// }
// let student = {
//     name : "Bapun",
//     rollnum :161,
//     age: 20,

// };
// console.log("the student " ,student.name , "is" , student.age)
// using template literals
// console.log( ` the student ${student.name}  is ${student.age}`)
// let name = (`the age of ${1+2+3}`)
// console.log(name)
// Escape charecter
// console.log(" bapun \n bhai")
// console.log("rana\ttunga")
// let str = "bapun\tbhai"//slace t are single charecter
// console.log(str.length)
// string method in js
// let str = "bapun "
// str.toUpperCase();
// console.log(str)// in the js strings are immutable
// str = (str.toLowerCase())
// console.log(str)
//strings method in js 
// trim method
// let str = "  bapun bhai   channel "
// console.log(str.trim())
// str.slice(start , end ?)
// let str =" bapubhai"
// console.log(str.slice(3 ))
// concartination method
// let str = "bapun" 
// let str2 = "bahi"
// let result = str.concat(str2)
// console.log(result)
// let result = str + str2;
// console.log(result)
//Replace method
// let str = "hellow";
// console.log(str.replace("hellow" , "silo"))
//str.charAt(idx)
// let str = "hellow"
//  let str2 = str.replace("e" , "w")
// console.log(str2)

// practise qs
let name = prompt("Enter your full name without space")
let username = ("@ "+name+name.length )
console.log(username)