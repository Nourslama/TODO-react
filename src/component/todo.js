import React, { Component } from 'react'
import './todo.css'


export default class todo extends Component {
    
        state={
          valeur:'',
          list:[],
          
        }
click=(e)=>{
    
    this.setState({
        valeur:e.target.value,
           
    })
}
handleSubmit=(e)=>{
  if(this.state.valeur!==""){
    this.setState({
        list:this.state.list.concat({valeur:this.state.valeur,isComplete:false}),
        valeur:""
        })}     else alert("ecrit quelque chose")   
}
handleComplete=(i)=>{
    this.setState({
        list:this.state.list.map((el,index)=> 
        i === index ? {...el,isComplete:!el.isComplete }:el)
    })
 }
 handleDelete = (index) => {
  
    this.setState({
      list : [...this.state.list.filter((el,i)=>i!==index)]
    })
 }


    render() {
        return (
            <div className="container">
            <div id="header" className="thehead">
            <h1>My List To Do</h1>
            <input value={this.state.valeur} type="text"  id="input" placeholder="titre.." onChange={this.click}/>
            <span className="createbtn" onClick={this.handleSubmit}>Create To Do</span>
            </div>
             <ul id="the-ul">{
                    this.state.list.map((item,i)=>
                    <div key={i} className="inline">
                      <li style={{textDecoration: item.isComplete ? "line-through":"none"}}>{item.valeur}</li>
             <button onClick={()=>this.handleComplete(i)}className="createbtn1">{item.isComplete?'UNDO':'COMPLETE'}</button>  
                         <button onClick={()=>this.handleDelete(i)} className="createbtn2">DELETE</button> 
                         </div>
                    )}
            </ul> 
             
            </div>
        )
    }
}

