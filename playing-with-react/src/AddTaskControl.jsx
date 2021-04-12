import React, { useState } from 'react';
import {AddTask} from './database'
function AddTaskControl({onHide}) {
     const [taskValue, setTaskValue] = useState('');
    return (
        <div>
            <input onChange = {(event) => 
            {
                setTaskValue(event.target.value)
            }} />
            <button onClick = {() => 
            {
                AddTask(taskValue);
                onHide();
            }}>Add</button>
            <button onClick = {onHide}>Cancel</button>
        </div>
    )
}
export default AddTaskControl;