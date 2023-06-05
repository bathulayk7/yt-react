import React, { useState } from "react";

const options=["Java","ReactJS","CSS"];
const opt=["Select course"];

const SelectArrayOptions = () => {
const [selected,setSelected] = useState("");

const handleOptions=(e)=>{
  setSelected(e.target.value)
}

  return (
    <div>
      <label>Select the course</label><br></br>
     <select value={selected} onChange={handleOptions} >
     {
      opt.map((defautSelect)=>(<option value="" >{defautSelect}</option>))
    } 
    {
      options.map((course)=>(<option>{course}</option>))
    }
     </select>
     <h2>{selected}</h2>
    </div>
  );
};

export default SelectArrayOptions;
