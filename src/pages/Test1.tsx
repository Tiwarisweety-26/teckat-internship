import React, { useEffect, useState } from 'react'

const Test1 = () => {

const [val, setval]=
useState(0);


useEffect(()=>{           
console.log("value changed");



},[val]);

  return (
    <>
    <div>
<h1>TEST</h1>
<button onClick ={()=>{setval(val+1)}} 


>Click{val}</button>


    </div>
    </>

  )
}

export default Test1