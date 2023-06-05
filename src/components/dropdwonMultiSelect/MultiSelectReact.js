import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const ArrayOfObjectoptions = [
  { id: "PM", name: "Project Manager" },
  { id: "TL", name: "Team Leader" },
  { id: "SD", name: "Senior Developer" },
  { id: "NM", name: "Network Manager" },
];

const MultiSelectReact = () => {
  const [selected, setSelected] = useState("");

  let options = ArrayOfObjectoptions.map((opt) => {
    const {id:value, name:label}=opt;
    return {value,label}
  });

  console.log("options",options)

  const handleOptions = (val) => {
    setSelected(val);
  };

  return (
    <div>
      <div>{selected}</div>
      <label>Please Select</label>
      <MultiSelect options={options} onChange={handleOptions} />
    </div>
  );
};

export default MultiSelectReact;
