// async function getSomeData(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    
//     console.log(response)
//     const data=await response.json()
//     data.map((e)=>{
//         console.log(e)
//         const div=document.createElement("div");
//         div.innerText=e.title
//         div.style.cssText="border:1px solid black;background-Color:blue; width:200px;height:200px"
//         document.body.append(div)
//     })

// }

// getSomeData()
async function getsomedata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
    const data = await response.json()
    data.map((e) =>{
        console.log(e)
        const div=document.createElement("div");
        div.innerText=e.title
        div.style.cssText="border:1px solid black;background-Color:blue; width:200px;height:200px"
         document.body.append(div)
    })
    
}
getsomedata()