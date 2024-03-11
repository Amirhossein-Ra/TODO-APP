import React, { useState } from 'react';
import '../FilterFooter/FilterFooter.css'
const FilterFooter = ({task,updateFilter}) => {
    const [filter,setFilter]=useState("All");
    const handleFilter=(filterName)=>{

        setFilter(filterName)
        updateFilter(filterName)
    }
    return ( 
        <div className="h-auto w-1/2 flex flex-row justify-center items-center ml-[23.5%]">
            <div className="h-8">
                {task?task.length:0} Times
            </div>
            <div className="h-8 flex flex-row justify-center items-center">
                <ul className="h-8 flex flex-row justify-center items-center gap-x-4">
                    <li>
                        <button onClick={()=>{handleFilter("All")}} className= {filter==="All"?"active bg-gray-300 px-3 border-black border-[1px] hover:bg-blue-400":"bg-gray-300 px-3 border-black border-[1px] hover:bg-blue-400"}>
                           All
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>{handleFilter("Active")}} className={filter==="Active"?"active bg-gray-300 px-3 border-black border-[1px] hover:bg-blue-400":"bg-gray-300 px-3 border-black border-[1px] hover:bg-blue-400"}>Active</button>
                    </li>
                    <li>
                        <button onClick={()=>{handleFilter("Completed")}} className={filter==="Completed"?"active bg-gray-300 px-3 border-black border-[1px] hover:bg-blue-400":"bg-gray-300 px-3 border-black border-[1px] hover:bg-blue-400"}>Completed</button>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default FilterFooter;