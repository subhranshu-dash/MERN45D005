import React from 'react'



function ChildC() {
  const name = useContext(namecontext)
   const [count , setCount] = useState(0)
  
  let b = 0
  return (
    <div>
     count : {count}
       <br/>
       <button onClick={() => {
        b++
        console.log(b)
        setCount(count+1)
       }}>count</button>
       <h1>Childc</h1>
       <p>Name is :{ name}</p>
        
    </div>
  )
}

export default ChildC