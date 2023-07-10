
import { useState } from 'react';
import './App.css';
import Axios from 'axios';
function App() {

  const [name, setName] = useState("");

  const [age, setage] = useState(0);
  const [country, setcountry] = useState("");
  const [position, setposition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeelist,setemployeelist]=useState([]);
  const display = ()=>{
    console.log(name+age+country+position+wage)
  }

  const addEmployee = ()=>{

    Axios.post('https://test-y99z.onrender.com/create',{
      name:name,
      age:age,
      country:country,
      position:position,
      wage:wage
    }).then(()=>{
      console.log("success");
    })

  }

  const getEmployees = ()=>{
    Axios.get('https://test-y99z.onrender.com/employees').then((response)=>{
      setemployeelist(response.data)
      console.log(response)
    })
  }

  return (
    <div className="App">

      <div className='Info'>
        <label>Name</label>
        <input type='text' onChange={e=>{setName(e.target.value);}}></input>

        <label>Age</label>
        <input type='number'onChange={e=>{setage(e.target.value);}} ></input>
        <label>Country</label>
        <input type='text'onChange={e=>{setcountry(e.target.value);}}></input>
        <label>Position</label>
        <input type='text'onChange={e=>{setposition(e.target.value);}}></input>
        <label>Wage</label>
        <input type='number'onChange={e=>{setWage(e.target.value);}}></input>
        <button onClick={addEmployee}>Add Employee</button>
        <button onClick={getEmployees}>Display</button>
      </div>
      <div className='employees'>
        {employeelist.map((val,key)=>{
          return <div>{val.name}</div>
        })}
      </div>
    </div>
  );
}

export default App;
