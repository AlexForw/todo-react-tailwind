import React from "react";
import {BsCheck} from 'react-icons/bs';

const CheckBox = ({isCompleted}) => {
    return(
        <div className='mr-2 border-2 rounded-lg border-pink-400 w-5 h-5'>
            { isCompleted &&
                <BsCheck size={24} />
            }
        </div>
    )
}
export default CheckBox