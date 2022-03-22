import React from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"


function RedList(){
    // const dispatch=useDispatch();
    const texts=useSelector((state)=>state.textarea.items);

   


    console.log(texts)
    return (
      <div className='header'>
        <div style={{"background":"red"}}>Red Side</div>
      <ul>
          {texts.map((item,i)=>item.color==="red"&&(<li className={item.color} style={{"listStyle":"none"}} key={i}><label>{item.title}</label></li>))}
      </ul>
      </div>
    )
  
}
export default RedList;