console.log("hellow")
const resesterform = document.getElementById("resester-form")
const loginform = document.getElementById("login-form")
const inputsreg = document.getElementsByTagName("input")
const inputlog = document.getElementsByTagName("input")
resesterform.addEventListener( "submit" ,(t) =>{
    t.preventDefault()
    const email = inputsreg[0].value
    const password = inputsreg[1].value
    const age = inputsreg[2].value

    const user = {email, password , age}
    localStorage.setItem("user" , JSON.stringify(user))
    alert("resistration is successfully")
})
loginform.addEventListener("submit",(y) =>{
    y.preventDefault()
    logemail = inputlog[0].value
    logpassword = inputlog[1].value
    
    // 
    const storeduser = JSON.parse(localStorage.getItem("user"))
    if(storeduser && storeduser.email === logemail && storeduser.password === logpassword ){
        console.log("login success fully")
        alert ("you have loged succesfully")
    }
    else{
        console.log("login failed")
        alert("wrong email password")
    }
})