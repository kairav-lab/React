function Student(props){
  console.log(props.name)
  return(
    <div>
    <h1>Hello {props.name}</h1>
    </div>
  )
}
export default Student;

function Student(props){
  console.log(props)
  return(
    <div style={{backgroundColor: "skyblue",margin:10}}>
      <h1>Hello {props.name}</h1>
      <h2>Email: {props.email}</h2>
    </div>
  )
}
export default Student;

import React from 'react'
export default class Student extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:'skyblue',margin:20}}>
              <h1>Hello {this.props.name}</h1>
              <h3>{this.props.email}</h3>
            </div>
        )
    }
}
