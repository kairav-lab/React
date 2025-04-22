import {useState} from 'react'
function Profile(){
  const [loggedIn,setLoggedIn]=useState(1)
  if(loggedIn){
    return (
      <div>
        {loggedIn==1?<h1>Welcome User 1</h1>:loggedIn==2?<h1>Welcome User 2</h1>:<h1>Welcome Guest</h1>}
      </div>
    );
  }
}
export default Profile;
