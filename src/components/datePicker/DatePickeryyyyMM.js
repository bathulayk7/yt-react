import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickeryyyyMM = () => {
const [date,setDate] = useState(null);  
const [dateVal, setDateVal] = useState("")

const handleDate=(dt)=>{
  setDate(dt);
let yyyyMM = dt ===null ?"":yyyyMMFormatDate(dt)
setDateVal(yyyyMM);
}  

const yyyyMMFormatDate=(d)=>{
  if(d){
    return d.getFullYear() + "/" + ("0" + (Number(d.getMonth())+1)).slice(-2)
  }
return d;
}

  return (
    <div>
      <DatePicker
      selected={date}
      dateFormat="yyyy/MM"
      onChange={(date)=>handleDate(date)}
      showMonthYearPicker
      />
      <h2>{dateVal}</h2>
    </div>
  );
};

export default DatePickeryyyyMM;
