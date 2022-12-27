import { useState, useRef } from 'react';
import React from 'react';
// import Getdata from './getdata';



function Todolist(){

    let name= useRef("");
    let [work,updatework]=useState("");
    let [list,updatelist]=useState([]);
    function updateuser(event){
        event.preventDefault();
      let user={
        id:list.length===0?1:list[list.length-1].id+1,
        taskName:work
      }
   updatelist([...list,user])
   updatework("")
       
 }
    function deletitems(items){
    updatelist(list.filter(task=> task.id===items?false:true))
   }
    return <> <form >
      
     <input type="text" placeholder="add tour work" id="names" name="work" value={work} onChange={(event)=>updatework(event.target.value)} ref={name}></input>
     {!(work.length===0) && <button onClick={updateuser}>add your work</button>}
     </form>
      {list.map((lists)=> {
       return (<div >
        <h1>{lists.taskName}</h1>
        <button  onClick={()=>deletitems(lists.id)}>X</button>
        </div>)
      })}
       </>
}
export default Todolist;