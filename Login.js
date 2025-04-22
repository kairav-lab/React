import React,{useState} from 'react'
function Login(){
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
export default Login;

import React,{useState} from 'react'
function Login(){
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [userErr,setUserErr]=useState(false);
  const [passErr,setPassErr]=useState(false);
  function loginHandle(e){
      if(user.length<3 || password.length<3){
        alert("type correct values")
      }
      else{
        alert("all good:)")
      }
      e.preventDefault()
    }
  function userHandle(e){
    let item = e.target.value
    if(item.length<3){
      setUserErr(true)
    }
    else{
      setUserErr(false)
    }
    setUser(item)
  }
  function passwordHandle(e){
    let item = e.target.value
    if(item.length<3){
      setPassErr(true)
    }
    else{
      setPassErr(false)
    }
    setPassword(item)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter User Id" onChange={userHandle} />{userErr?<span>User Not Valid</span>:""}
        <br /><br />
        <input type="password" placeholder="Enter User Password" onChange={passwordHandle} />{passErr?<span>Password Not Valid</span>:""}
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
