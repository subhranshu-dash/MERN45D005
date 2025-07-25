//  function myFuncrion(msg){
//     console.log(" my name is");
//     console.log(" to name")
//     console.log(msg)
//  }
//  myFuncrion()
//  // functon -> 2 num sum
//  function sum( a ,  b ,c ,d , e ){
//       s = a+b+c+d+e
//       return s

//  }
// //  sum(3,4)
//  let r = sum(3,4 ,5,6,7)
//  console.log(r)
//  // arrow function
//  let arrowmlt = (a,b)=>{
//     return a*b// morden js
//  }
//  // division
//  const division =  (a ,b) =>{
//     return a/b
//  };
//  division = 3;
 

// // that is the 
// const addition = ( a,b) =>{
//     return a+b
// }
// // qs check the vowel in the string 
//  function countvowels(str){
//     let count = 0
//     for(let v of str){
//         if( v ==="a" || v==="e" || v ==="i" || v==="o" || v==="u" ){
//             count++

//         }
        
//     }
//    console.log(count)
//  }
 // for each looo in arrays
//  arr.forEach(callback function)

//  let arr = [ 1 ,3,4];
//  arr.forEach( function printval(val){
//     console.log(val);
//  });
// use the arrow method
//  let arr = [7 ,5 ,4,1]
//  arr.forEach((v)=> {
//     console.log(v)
//  })
// arr = [ "deli" ,"mumbai" , "odisha"]
// arr.forEach((v , idx ,arr) => {
//     console.log(v.toUpperCase(),idx ,arr) 
// })
// interveiw
// higher order function
// qs
// arr = [ 1,2 ,3,4]
// arr.forEach((v) => {
//     console.log(v*v)
// })
// array methods 
// 1. map methods
// arr = [ 30 , 40 ,70]
//  let cal = arr.map( (v) => {
//     return v**2
// })
// console.log(cal)
// filter method
//  arr = [ 1,4 ,7,8,9]
//   let arry1 = arr.filter(( val) =>{
//     return val !=2
//  })
//  console.log(arry1)
 //reduce method
//  let arr = [ 1 ,2 ,3 ,4 ]
//   let output = arr.reduce( (prev , curr) =>{
//     return prev < curr  ? prev : curr;
//  })
//  console.log(output)
 //qs
//     marks = [ 93 ,79,90,95]
//   let score = marks.filter((v) =>{
//   return v>=90
//  })
//  console.log(score)
// qs
//  let n = prompt("enetr a number")

//  let arr = []
//  for( i =1 ; i<=n ; i++){
//     arr[i-1] = i // 1(0), 2(1)
//  }
//  console.log(arr)
 // qs sum the reduce method
//  arr1 = [90, 86,40]
//   let total = arr1.reduce((prev,curr)=>{
//    return prev+curr
 
//  })
//  console.log(total)
// qs 3 factorial
// arr= [ 1,3,5,6]
//  let factorial = arr.reduce((prev ,curr  ) =>{
//    return prev*curr
// })
// console.log(factorial)
function myName( number1 , number2){
  return number1+number2
  

}

myName(2,4)


  
 
 
