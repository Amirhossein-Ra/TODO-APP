import React from "react";
import TaskItem from "../taskItem/TaskItem";
const TaskList = ({task,deleteTask,handleStatus}) => {
    
    return ( 
    <div className="h-auto w-1/2 flex justify-center items-start ml-[23.5%]">
        <ul className="w-full flex flex-col justify-center items-center">
        {task?.map(task=>{
            return(<TaskItem key={`task-${task.id}`} task={task} deleteTask={deleteTask} 
            handleStatus={handleStatus} />)})}
        </ul>  
    </div>
     );
}
 
export default TaskList;