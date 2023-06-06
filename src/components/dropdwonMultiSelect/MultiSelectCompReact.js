import React, { useState } from "react";
import Select from "react-select";

const countries = [
  { value: 1, label: "India" },
  { value: 2, label: "US" },
  { value: 3, label: "UK" },
];

const MultiSelectCompReact = () => {
  const [selected, setSelected] = useState([]);

  const handleOptions = (list) => {
    setSelected(Array.isArray(list) ? list.map((item) => item.label) : []);
  };

  return (
    <div>
      <h2>{selected + ""}</h2>
      <div style={{width:"200px"}} >
        <Select options={countries} isMulti onChange={handleOptions} />
      </div>
    </div>
  );
};

export default MultiSelectCompReact;
