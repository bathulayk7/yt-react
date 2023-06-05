import React, { useState } from "react";

const BasicSelect = () => {
  const [option,setoption] = useState("");

  const handeOptions=(e)=>{
    setoption(e.target.value)
  }

  return (
    <div>
      <label>Select the day</label><br></br>
      <select value={option} onChange={handeOptions} >
        <option value="" >Select...</option>
        <option value="1" >Monday</option>
        <option value="2" >Tueday</option>
        <option value="3" >Wednesday</option>
        <option value="4" >Thursday</option>
        <option value="5" >Friday</option>
        <option value="6" >Saturday</option>
        <option value="7" >Sunday</option>
      </select>
      <h3>{option}</h3>
    </div>
  );
};

export default BasicSelect;
