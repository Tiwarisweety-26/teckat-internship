import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

/*function App() {
const[data, setData] = useState<number>();

useEffect(()=>{
  setData(234);
},[]);



return(
  <>
  <div>{data}</div>
  </>
);
}
export default App;*/

function App() {
  const [data, setData] = useState<number>(0);
  const [numberData, setNumberData] = useState<number>(0);

  const numberArray =[1,2,3,4,5,6,7,8];
  const people = [
    { name:"john", age: 30, status: "active"},
    {name:"jane", age: 25, status: "inactive"},
    {name:"mike", age: 35, status: "active"},
  ];
  useEffect(() => {
    setData(1);
  },[]); 
   const addData =() => {
    const oldData = data;
    const newData = oldData + 1;
    setData(newData);
    console.log(newData);

  };
  const decrementData = () => {
    setNumberData(numberData - 1);
  }

  return (
    <>
    <button title="title"onClick={addData} className={'number ${data}'}>
    add data
    
    </button>
    <div>
      Incremented Data: {data}
    </div>
    <br />
    <button onClick={decrementData}className={'decrement= ${number}'}>
      decrement
    </button>
    <div> decremented Data: {numberData}</div>
    {numberArray.map((item, i) => {
      return <div key ={i}>{item}</div>;
    })}
    {people.map((item, i) => {
      return (
        <div key={i}>
        {item.status === "active" && (
          <>
          
        <div>name: {item.name}</div>
          <div>Age:{item.age}</div>
          <br />
        
          </>
        )}
    </div>
    )})}
    
  

<hr />
{people.map((item, i) => {
  return (
    <div key={i}>
    {item.status === "active" ? (
      <>
      
    <div>name: {item.name}</div>
      <div>Age:{item.age}</div>
      <br />
      </>):(<>hggj</>)

    }
    </div>)})}

</>)
}
export default App;

  /*return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
