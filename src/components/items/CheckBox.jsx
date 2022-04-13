import React from "react";
import {BsCheck} from 'react-icons/bs';

const CheckBox = ({isCompleted}) => {
    return(
        <div className={`mr-2 border-2 rounded-lg flex items-center justify-center border-pink-400 ${isCompleted ? 'bg-pink-400' : ''} w-7 h-7`}>
            { isCompleted &&
                <BsCheck size={24} />
            }
        </div>
    )
}
export default CheckBox