import React, { useState } from "react";
import TodoItem from "../items/TodoItem";



const Home = () => {

    const [value, setValue] = useState('')


    const [todos, setTodos] = useState([])

    const checkComplete = (id) => {
        const copy = [...todos]
        const current = copy.find(elem => elem.id === id)
        current.isComplete = !current.isComplete
        setTodos(copy)
        console.log(copy);
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(elem => elem.id !== id))
    }

    return (
        <div className="w-4/5 mx-auto text-white ">
            <h1 className="text-2xl text-center font-bold mb-10">Todo-react</h1>
            <div>
                <input type="text" value={value}
                    className="text-black"
                    onChange={(elem) => setValue(elem.target.value)} />

                <button onClick={() => setTodos([...todos, { value, id: Math.random(), isComplete: false }])}>Click</button>
            </div>
            {
                todos.map((elem) => {
                    return (
                        <TodoItem removeTodo={removeTodo} checkComplete={checkComplete} key={elem.id} todo={elem} />
                    )
                })
            }
        </div>
    )
}

export default Home