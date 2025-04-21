import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <User />
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import User from './User'
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <User />
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import User from './User'
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <User />
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import User from './User'
function App() {
  return (
    <div className="App">
      <h1>JSX!</h1>
      <User />
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
function App() {
  function apple() {
    alert("function called");
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={apple()}>Click me</button>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
function App() {
  function apple() {
    alert("function called");
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={()=>alert("hello")}>Click me</button>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
function App() {
  let data = anil sidhu"
  function apple() {
    alert(data);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>alert("hello")}>Click me</button>
    </div>
  );
}
export default App;

import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
function App() {
  const [data,setData]=useState("anil")
  function updateData(){
    setData("sidhu")
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
export default App;

import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:"anil"
    }
  }
  apple(){
    this.setState({data:"sidhu"})
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    );
  }
}
export default App;

import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:1
    }
  }
  apple(){
    this.setState({data:this.state.data+1})
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    );
  }
}
export default App;

import logo from './logo.svg';
import './App.css';
import Student from './Student'
function App(){
  return(
    <div className="App">
        <h1>Props in React :)</h1>
        <Student name={"anil"} />
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import Student from './Student'
function App(){
  return(
    <div className="App">
        <h1>Props in React :)</h1>
        <Student name={"anil"} email="anil@test.com" />
    </div>
  );
}
export default App;

import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'
function App(){
  const [name,setName]=useState("anil")
  return(
    <div className="App">
        <h1>Props in React :)</h1>
        <Student name={name} />
        <button onCLick={()=>{setName("sidhu")}}>Update Name</button>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"anil"
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Props!</h1>
        <Student name={this.props.name} email="anil@test.com" />
        <button onClick={()=>this.setState({name:"sidhu"})}>Update Name</button>
      </div>
    );
  }
}
export default App;

import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App(){
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
    function getData(val){
      console.warn(val.target.value)
      setData(val.target.value)
      setPrint(false)
    }
    return (
      <div className="App">
        {
          print?
          <h1>{data}</h1>
          :null
        }
        <input type="text" onChange={getData} />
        <button onClick={()=>setPrint(true)}>Print Data</button>
      </div>
    );
}
export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react'
function App(){
  const [status,setStatus]=React.useState(true)
  return (
    <div className="App">
      {
        status? <h1>Hello World!</h1>:null
      }
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App(){
  const [name,setName]=useState("");
  const [tnc,setTNC]=useState(false);
  const [interest,setInterest]=useState("");
  function getFormData(e){
    console.warn(name,tnc,interest)
    e.preventDefault()
  }
  return (
    <div className="App">
      <h1>Handle Form in React</h1>
      <form onSubmit={getFormData)>
        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select> <br /><br />
        <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)} /><span>Accept Terms and Conditions</span>
        <br /><br />
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}
export default App;
