import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = () => {
  const [DateObj, setDateObj] = useState(null);
  const [dateVal, setDateVal] = useState("");

  const handleDate = (dt) => {
    setDateObj(dt);
    let normalFormate=dt===null?"":normalDateFormate(dt);
    setDateVal(normalFormate);
  };

  const normalDateFormate=(d)=>{
    console.log(d.getDate())
    if(d){
        return(
            ("0" + d.getDate()).slice(-2) + 
            "/" +
            ("0" + (Number(d.getMonth())+1)).slice(-2) +
            "/" +
            d.getFullYear()
        )
    }
    return d;
  }

  return (
    <div>
      <DatePicker
        selected={DateObj}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => handleDate(date)}
      />
      <h2>{dateVal}</h2>
      <DatePicker
        selected={DateObj}
        dateFormat="yyyy/MM"
        onChange={(date) => handleDate(date)}
      />
    </div>
  );
};

export default DatePickerComp;
