import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const TaskItem = ({task,deleteTask,handleStatus}) => {

    const handleDelete = () => {
        deleteTask(task.id);
      };
    return ( 
        <li className="w-full flex flex-row justify-between items-center py-3 bg-gray-400">
            <input onChange={()=>{handleStatus(task.id)}} type="checkbox" checked={task.status}/>
            <h2 className="mr-[500px]">{task.title}</h2>
            <button className="mr-2" onClick={handleDelete}><FaTrashAlt /></button>
        </li>
     );
}
 
export default TaskItem;