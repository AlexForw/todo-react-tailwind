import React, { useState } from "react";
import TodoItem from "../items/TodoItem";



const Home = () =>{

    const [value,setValue] = useState('')


    const [todos, setTodos] = useState([])

    const checkComplete = (id) =>{
        const copyArr = [...todos]
        const current = copyArr.find(elem => elem.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copyArr)
    }
    
    const removeTodo = todo => {
        setTodos(todos.filter(elem => elem.id !== todo.id))
        console.log(todos);
    }

    return(
        <div className="w-4/5 mx-auto text-white ">
            <h1 className="text-2xl text-center font-bold mb-10">Todo-react</h1>
            <div>
                <input type="text" value={value} className="text-black" onChange={(elem)=> setValue(elem.target.value)}/>
                <button onClick={() => setTodos([...todos, value])}>Click</button>
            </div>
            {
                todos.map((elem,i)=>{
                    // console.log(elem)
                    return(
                        <TodoItem removeTodo={removeTodo} checkComplete={checkComplete} key={i + elem} todo={elem}/>
                    )
                })
            }
        </div>
    )
}

export default Home