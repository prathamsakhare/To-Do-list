import React from 'react';

function ShowTodo(props) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h6>{props.task}</h6>
                {/* here we are going to recieve information as props */}
            </div>
            <div className='col-6'>
                <button onClick={() => {props.onSelect(props.id)}}>X</button>
            </div>
        </div>
    </div>
  )
}

export default ShowTodo