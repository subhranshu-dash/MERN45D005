// let button = document.querySelector("button")
// button.onclick = () => {
//     console.log("hellow") // under the js  
// }
let button = document.querySelector("#toggle")
let currmod = "light"
button.addEventListener("click" ,() => {
    if(currmod=== "light"){
        currmod = " dark"
        document.querySelector("body").style.backgroundColor = "black"
    }else{
        currmod = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(currmod)
    
} )