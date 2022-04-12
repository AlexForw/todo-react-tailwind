import React, { useState } from "react";
import TodoItem from "../items/TodoItem";

const data = [
    {
        id: Math.random(),
        title:'Today you should go away with your goods',
        isCompleted: false,
    },
    {
        id: Math.random(),
        title:'Makes girlfriend suck your thing',
        isCompleted: false,
    },
    {
        id: Math.random(),
        title:'Helps 10 people with their assigments',
        isCompleted: false,
    },
]

const Home = () =>{

    const [todos, setTodos] = useState(data)

    const checkComplete = (id) =>{
        const copyArr = [...todos]
        const current = copyArr.find(elem => elem.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copyArr)
    }

    return(
        <div className="w-4/5 mx-auto text-white ">
            <h1 className="text-2xl text-center font-bold mb-10">Todo-react</h1>
            {
                data.map((elem,i)=>{
                    return(
                        <TodoItem checkComplete={checkComplete} key={i + elem} todo={elem}/>
                    )
                })
            }
        </div>
    )
}

export default Home