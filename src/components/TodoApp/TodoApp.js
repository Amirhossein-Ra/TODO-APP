import React from 'react';
import TaskList from '../TaskList/TaskList';
import FilterFooter from '../FilterFooter/FilterFooter';
import Addtaskform from '../Addtaskform/Addtaskform';

const TodoApp = ({tasks, Addtask,deleteTask,updateFilter,handleStatus}) => {
   
    return ( 
    <div className='h-auto mt-5 ml-5'>
        <Addtaskform  Addtask={Addtask}  /> 
        <TaskList task={tasks} deleteTask={deleteTask} handleStatus={handleStatus} />
        <FilterFooter task={tasks} updateFilter={updateFilter}/>
    </div>
        
     );
}
 
export default TodoApp;