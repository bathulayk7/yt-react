import React from "react";

const CurrentDateyyyyMM = () => {

  const getCurrentyyyyMM=()=>{
    let d = new Date();
    return d.getFullYear() + "/" + ("0" + (Number(d.getMonth())+1)).slice(-2)
  }

  return (
    <div>
      <h2>
        {
          getCurrentyyyyMM()
        }
      </h2>
    </div>
  );
};

export default CurrentDateyyyyMM;
