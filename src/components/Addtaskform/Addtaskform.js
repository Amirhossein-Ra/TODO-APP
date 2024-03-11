import { useState } from "react";

const Addtaskform = ({Addtask}) => {
    const [value,setValue]=useState("");
    const handleChange =(e)=>{
        if(e) e.preventDefault();
         let text = e.target.value;
         setValue(text);
    }
    const handleSubmit=(e)=>{
        if(e) e.preventDefault();
        if(!value || value===""){
            return
        }
        Addtask(value);
    }
    
    return (
        <div className="h-auto">
            <form onSubmit={handleSubmit} action="" className=" flex flex-row justify-center items-center">
                <input onChange={handleChange} className="bg-gray-900 py-3 w-1/2 rounded-lg text-white" type="text" placeholder='What needs to be here' />
                <button  className='Submit w-[50px] h-[50px] bg-slate-700 rounded-lg text-white'>
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default Addtaskform;