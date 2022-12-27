import React, { useRef, useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const empty = useRef("")

  function handleClickAdd(event) {
    event.preventDefault();
   
    setList((list) => {
      const addtask = [...list, task];
      console.log(addtask);
     // setTask(" ");
      return addtask;
    });
    setTask("");
  }

  function handleClickDelete(index) {
    let deletetask = list.filter((el, indexs) => {  

      // if(index===id){
      //   return false;
      // }else{
      // return true;
      // }
      return index != indexs;
    });
    setList(deletetask);
  }

  function handleClickDeleteAll() {
    setList([]);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <input
        type="text"
        ref={empty}
        placeholder="Add Task"
        value={task}
        
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />

      {!(task.length ===0) && <button onClick={handleClickAdd} >+</button>}
      <p className="list-heads">Today task are</p>
      {list != [] &&
        list.map((tasks, index) => {
          return (
            <div>
              <p key={index}>
                <div className="added-lists">{tasks}</div>
                <div className="btn-psn">
                  <button onClick={() => handleClickDelete(index)}>-</button>
                </div>
              </p>
            </div>
          );
        })}

      {/* //To remove all task */}
      {list.length >= 1 ? (
        <button onClick={handleClickDeleteAll}>Clear all </button>
      ) : null}
     
    </div>
  );
}

export default Todo;
