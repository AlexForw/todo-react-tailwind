import React from "react";
import CheckBox from './CheckBox';


const TodoItem = ({todo}) => { 
    return(
        <button className="mb-3 flex items-center rounded-2xl p-5 bg-gray-800 w-full">
            <CheckBox isCompleted={todo.isCompleted}/>
                <div>{todo.title}</div>
            
        </button>
    )
}

export default TodoItem