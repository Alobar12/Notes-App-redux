import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addText } from "../redux/textarea/areaSlice";

function Main() {
  const [title, setTitle] = useState("");
  const [color,setColor]=useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(color===""){
        return alert("Please select a color")
    }
    dispatch(addText({title,color}));
    setTitle("")
  };
  const handleClick=(e)=>{
      setColor(e.target.className)
      
  }
  
  return (
      <div>
    <form onSubmit={handleSubmit}>
      <textarea
        value={title}
        style={{"background":"white", width: "400px", height: "200px", resize: "none", "color":{color},"borderRadius":"8px" }}
        placeholder="Enter your note here..."
        onChange={(e)=>setTitle(e.target.value)}
      ></textarea>
      <div>
        <button >Add</button>
      </div>
      </form>
      <br></br>
      <br></br>

      <div>
          <button className="red" onClick={handleClick} style={{"width":"40px","height":"40px","borderRadius":"40px","backgroundColor":"red"}} value={color}></button>
          <button className="yellow" onClick={handleClick} style={{"width":"40px","height":"40px","borderRadius":"40px","backgroundColor":"yellow"}} value={color}></button>
          <button className="green" onClick={handleClick} style={{"width":"40px","height":"40px","borderRadius":"40px","backgroundColor":"green"}} value={color}></button>
          <button className="black" onClick={handleClick} style={{"width":"40px","height":"40px","borderRadius":"40px","backgroundColor":"black"}} value={color}></button>
        
        
      </div>
      
    
    </div>
  );
}
export default Main;
