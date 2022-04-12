import React from "react";
import TodoItem from "../items/TodoItem";

const data = [
    {
        title:'Today you should go away with your goods',
        isCompleted: false,
    },
    {
        title:'Makes girlfriend suck your thing',
        isCompleted: false,
    },
    {
        title:'Helps 10 people with their assigments',
        isCompleted: false,
    },
]

const Home = () =>{
    return(
        <div className="w-4/5 mx-auto text-white ">
            <h1 className="text-2xl text-center font-bold mb-10">Todo-react</h1>
            {
                data.map((elem,i)=>{
                    return(
                        <TodoItem key={i + elem} todo={elem}/>
                    )
                })
            }
        </div>
    )
}

export default Home