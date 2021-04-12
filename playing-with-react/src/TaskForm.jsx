import React, { useState } from 'react';
import AddTaskControl from './AddTaskControl'
import {ListTasks} from './database'

function TaskForm () {

    const [addControlVisible, setAddControlVisible] = useState(false);

    return (
    <div>
        bgfbngfh
      <button 
      onClick = {() => setAddControlVisible (true)}>Add</button>  
       {addControlVisible ? <AddTaskControl onHide={() =>  setAddControlVisible(false) }/> : <></>   }

       <div>
        {
          ListTasks().map(task =>
          {
            return <div>{task}</div>
          })
        }
       </div>
    </div>
   
    )
}
export default TaskForm;