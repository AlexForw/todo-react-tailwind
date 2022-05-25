import React from "react";
import CheckBox from './CheckBox';
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo, checkComplete, removeTodo }) => {
    return (
        <div onClick={() => checkComplete(todo.id)} className="mb-3 flex items-center rounded-2xl p-5 bg-gray-800 w-full">
            <CheckBox isCompleted={todo.isComplete} />
            <div className="mr-2 text-gray-500 hover:text-pink-800" onClick={(e) => {
                e.stopPropagation()
                removeTodo(todo.id)
            }}><BsTrash size={24} /></div>
            <div className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.value}</div>

        </div>
    )
}

export default TodoItem