import React, { useState } from "react";
import { useEffect } from "react";

const arrayOfObjectOptions = [
  { id: "IN", name: "India" },
  { id: "JP", name: "Japan" },
  { id: "IR", name: "Iran" },
];

const SelectArrayOfObjects = ({labelText="",initial="",hasValue=""}) => {
  const [selected, setSelected] = useState("");

useEffect(()=>{
  setSelected(hasValue);
},[hasValue])

  const handleOptions=(e)=>{
    setSelected(e.target.value);
  }

  return (
    <div>
      <label>{labelText}</label><br></br>
      <select value={selected} onChange={handleOptions} >
        {
          <option value="">{initial}</option>
        }
        {
          arrayOfObjectOptions.map((country)=>(
            <option key={country.id} value={country.id} >{country.name}</option>
          ))
        }
      </select>
      <h2>{selected}</h2>
    </div>
  );
};

export default SelectArrayOfObjects;
