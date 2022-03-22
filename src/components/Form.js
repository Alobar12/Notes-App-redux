import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  
  return (
    <div>
      <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Search.."
      ></input>
    </div>
  );
}
export default Form;
