import logo from './logo.svg';
import './App.css';

function App() {
//let str ="hello"
//let str2 ="world"
//if (str === "hello" && str2 ==="world")
 // {
//console.log("hello world")
 // }
 //const student1 = {
  //name: "dissh",
  //age: "20"
 //};
// if(student.name !== "swee"){
 // console.log("hiii swee");
 //}
//else{
 // console.log("hiii dishh");
//}
//const student2 ={
  //name: "dissh",
  //age: "20"
//};

//const fun1 = () =>{
  //const num1=1;
  //const num2=4;
  //const sum= num1+num2;
  //console.log(sum);

  //};
  //if(student1.name===student2.name){
  //fun1();
  //}

/*const arr1 =[1,2,3,4,5];
for (let item of arr1)
  {
    console.log(item);
  }*/
/*const people = [
  {name : "sweety",age: 20},
  {name : "disha",age :20},
  {name : "khushi",age:20},
];*/
/*for(let person of people){

  console.log(`Name: ${person.name},Age:${person.age}`);

  }*/
  //const student = [
    //{name : "sweety",age: 20},
    //{name : "disha",age :20},
    //{name : "khushi",age:20},
  //];
   //student.forEach((person)=>{
    //console.log(`Name: ${person.name},Age:${person.age}`);
 
   //});
   /*const employee = {
    name: "sweety",
    age:20,
    occupation: "Software Engineer",
   };
   
   
   //console.log(employee.occupation);

for (const key in employee){
  if(employee.hasOwnProperty(key)){
    console.log(`${key}:${employee[key]}`);
  }
}*/
//=========================================================================================================
/*const employees=[
  { name :"sweety",age:20,salary:80},
  {name:"disha",age:21,salary:50},
  { name :"harjot",age:23,salary:70},
  {name:"beauty",age:18,salary:60},
];

const mappedEmployees = employees.map((item)=> {
 
return{
  ...item,
  salary: item.salary + 100,
};
},
[]);

console.log('mappedEmployees', mappedEmployees);*/
//============================================================================
   
const products = [
  {id:101,name:"laptop",price:10000,category:"electronics"},
  {id:102,name:"shirt",price:250,category:"clothing"},
  {id:103,name:"coffee maker",price:550,category:"home appliances"},
  {id:104,name:"pants",price:50,category:"clothing"},

];
const  filteredProducts = products.filter((item)=>{
  return item.category==="clothing";
});
console.log("filteredProducts",filteredProducts );

 const foundProducts = products.find((item)=>{
  return item.id===102;
});
console.log("foundProducts",foundProducts);


return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
