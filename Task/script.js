// // qs 
// const s = "apple,banana,cherry";
// // console.log("apple\t banana\t cherry ")
// const1 ="apple"
// const2 = "banana"
// const3 = "chery"

// let result = const1+const2+const3
// console.log(result)
// //qs4
// const s1 = "hello world, hello JavaScript!";

// const charCount = {};


// for (let char of s1) {
//     if (char === ' ') continue; 
//     charCount[char] = (charCount[char] || 0) + 1;
// }


// for (let char in charCount) {
//     console.log(`${char} → ${charCount[char]} times`);
// }
// qs1
// let company = ["bloom" ,"microsoft","ubar" ,"google" , "ibm" ,"netflix"]
//  company.shift()
//  console.log(company)
//  company.splice( 2 , 2 ,"ola" )
//  console.log( company)
//  company.push("amazon")
//  console.log(company)
 // qs 
//  let arr=["item 3","item 2","item 1","item 7","item 5"];
//  const arr1 = arr.sort((a,b) => {
//     if (a>b) return 1;
//     if (b>a) return -1;
//     return 0;

//  });
//  console.log(arr1)

//  arr.sort((a,b) => {
//     return a-b;
//     return b-a;
//  })
//  console.log(arr)
//qs1 check palandromic or not
// let str = "sac"
// let reverse= ""
// for(let i =str.length-1 ; i>=0; i--){
//     reverse = reverse+str[i]
// }
// console.log(reverse)
// if (str===reverse){
//     console.log("string is palandromic")
// }else{
//     console.log("string is not palandromic")
// }
// //qs3
// const s = "apple,banana,cherry";
//  console.log(s.split("," ))
 // qs4
 
//  const s1 = "hello world, hello JavaScript!";
// const s2 = "hello world, hello JavaScript "; // The substring to count

// const count = (s1.match(new RegExp(s2, "l")) || []).length;

// console.log(count); // Output: 2
//qs 5
// let arr3 = [1,2,3,4]
// let sum3 = 0;
// for( let v of arr3){
//     sum = sum3+v


// }
// console.log(sum)// the out put is 10
// qs 6
// let arr=["item 3","item 2","item 1","item 7","item 5"];
// arr.sort()
// console.log(arr)
// //qs 7 sorting property
// let  num =[ 1, 10 ,30,40,3 ,4,7]
// num.sort((a,b ) => b-a)
// console.log(num)

// qs 8
// let s1 = "hello world, hello JavaScript!"
// let obj = {}
// for( i = 0 ; i<=s1.length-1; i++ ){
//     if(obj [s1[i]] != "" ){
//     if( obj [s1[i]]){
//          obj[s1[i]] = obj[s1[i]]+1
//     }else{
//         obj[s1[i]] = 1
//     }
// }
// }
// console.log(obj)

// qs 9
// function sumArray(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }

// console.log(sumArray([1, 2, 3, 4]));
// qs 10
// let Myname = []

// for( let i = 0 ; i< 10 ; i++ ){
//     if( )
// }

// let arr4 = [10 ,30, 50 ,60]
//    let marks =  arr4.filter((v)=>{
//         return v>=50
//      })
//      console.log(marks)

//  let number = prompt("enter a number")
     
     
// let arr5 = [ 1,2,3,4,5]
// arr5.forEach((v) =>{
//      console.log(v* v)
// })
// qs1
//  let arr5 = [ 1 ,2 ,3 ,4 ,5 ]
//   let total = arr5.reduce(( prev , curr) =>{
//     return prev+curr
//  })
//  console.log(total)//15
//  // qs 4 
//  arr3 = [1 ,5,6,7,8,9]
//  for( let v of arr3){
//     if( v%2 == 0){
//         console.log(v)//68
//     }
//  }
//  // qs3
//   let n =prompt("enter a num")
//  for( let v of n){
//     if( v>=0 ){
//         console.log("the value is maximum")
//     }else{
//         console.log("the value is min")
//     }

//  }
//  //qs5
//  let arr=[1 , 2 , 3 ,2 ,1];

// let reverse="";

// for(let i=arr.length-1;i>=0;i--){
//     if( arr === reverse){
//         return true
//     }
      
// }
// console.log(reverse)
// let logo = document.getElementById("bapun")
// console.log(logo)
// logo.style
//next qs 
const contener = document.getElementsByClassName("contener")[0]
console.log(contener)
const inputs = document.getElementsByTagName("input")
console.log(inputs)
contener.addEventListener( "submit" ,(f) =>{
  // f.preventDefault()
  const Name = inputs[0].value;
  const Email = inputs[1].value;
  const number = inputs[2].value
  console.log(Name,Email,number)

  localStorage.setItem("user",JSON.stringify({Name , Email,number}) )
  console.log(Name,Email,number)
})


