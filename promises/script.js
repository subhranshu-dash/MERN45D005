//  function hii(){
//     console.log("raja babu")
//  }
//  setTimeout(hii , 5000)
// setTimeout(()=>{
//    console.log("bapun bhai")
// }, 4000)
// function getdata(dataid){
//  setTimeout(()=>{
//    console.log("data" ,dataid)
//  } ,4000)
   
// }
// promises
// promises
// let promise = new Promise((resolve , reject) =>{
//    console.log("print the value")
//    resolve("yes that is resolve")
   // reject("so give the error")
// })
// .then // .catch
// 
// chaining promises
// function asyncfunc1(){
//    return new Promise((resolve , reject ) =>{
//       setTimeout(() =>{
//          console.log("data1")
//          resolve("successfully")
//       } , 6000)
//    })
// }  

// function asyncfunc2(){
//    return new Promise((resolve , reject ) =>{
//       setTimeout(() =>{
//          console.log("data2")
//          resolve("successfully")
//       } , 6000)
//    })
// } 
// console.log("fetching data 1..")
// asyncfunc1().then((res) =>{
//    console.log("fetching data2 ..")
//    asyncfunc2().then((res)=>{

//    })
// })
// let j = asyncfunc1()
// j.then((res) =>{
   
//    console.log(res)

// })
// console.log("fetching data 2..")
// let j1 = asyncfunc2()
// j.then((res) =>{
   
//    console.log(res)

// })
// async- await

function api(){
   return new Promise((resolve , reject) =>{
      setTimeout(() =>{
         console.log("give wether data")
         resolve(200)
      } ,2000)
   })
}
 async function getwetherdata(){
   await api()
   await api()
 }
 function getdataid( dataid){
   return new Promise ((resolve ,reject)=>{
     setTimeout(() =>{
      console.log("data " , dataid)
      resolve("sucess")
     },2000 )
   })
 }
 //async await
 (async function (){
   await getdataid(1)
   await getdataid(2)
   await getdataid(3)
 })() // using this not ()() not us efunction name
//iife direct call

