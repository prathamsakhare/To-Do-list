import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  // 1) set the current state for the input value

  const [data, setData] = useState([]);
    // 5) here we have made this state for storing the data that we are going to submit from our form and the data will get stored in the form of objects inside the array that is empty for current state
  const handleChange = (event) => {
    event.preventDefault();
    // this can prevent the page from reloading 
    setTask(event.target.value);
   

  };
  const handleSubmit = (e) => {
      e.preventDefault()
      const newData = task;
    // 6) we are making a vaiable that can store the task that is entered
      setData([...data, newData])
    // 7) then we are going to set the new state of the data as the new data variable and all previous task, to them we are going to append / spread them inside the data variable 
      
      setTask("")
    // 8) then after the setting of data we are again setting the state of the task as empty string

      
  }
  const deleteItem = (a) => {
      const finalData = data.filter((curEle, index) => {
            return index !== a;
      })
      setData(finalData)
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col p-2">
              <h4 className="text-center">Todo App</h4>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
              {/* 4) make one onSubmit event for the form to submit it and make one function inside it that can store the submitted value */}
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={task}
                  // 2) set the value of the input field as the current state

                  onChange={handleChange}
                  // 3) Set an onChange event handler for the input value (When it change) and declare a function inside the event to catch the changed value
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add Todo
              </button>
            </div>
          </form>

            {
                data.map((value, index) => {
                    return <ShowTodo key={index} id={index} task={value} onSelect={deleteItem}></ShowTodo>
                })

            }
            {/* then we can map the data that we are going to fill and for each and every item, we are going to make a new component named as ShowTodo.js and for that we are sending the value that we are going to enter as props, then inside the data.map function we are going to render the ShowTodo.js  */}
           



        </div>
      </div>
    </div>
  );
}

export default Todo;
