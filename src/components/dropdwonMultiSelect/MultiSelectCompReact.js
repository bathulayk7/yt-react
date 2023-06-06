import React, { useState } from "react";
import Select from "react-select";

const countries = [
  { value: 1, label: "India" },
  { value: 2, label: "US" },
  { value: 3, label: "UK" },
  { value: 4, label: "JAPAN" },
  { value: 5, label: "RUSSIA" },
  { value: 6, label: "CHINA" },
];

const MultiSelectCompReact = () => {
  const [selected, setSelected] = useState([]);

  const handleOptions = (list) => {
    setSelected(list);
  };

  let backEndList = selected && selected.map((list) => list.value);
  console.log("backEndList", backEndList);

  return (
    <div>
      <h2>{backEndList.map(val=>val+",")}</h2>
      <div style={{ width: "200px" }}>
        <Select options={countries} isMulti onChange={handleOptions} />
      </div>
    </div>
  );
};

export default MultiSelectCompReact;
