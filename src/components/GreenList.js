import React from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"


function GreenList(){
    // const dispatch=useDispatch();
    const texts=useSelector((state)=>state.textarea.items);

   


    console.log(texts)
    return (
        <div className='header'>
            <div  style={{"background":"green"}}>Green Side</div>
      <ul>
          {texts.map((item,i)=>item.color==="green"&&(<li className={item.color} style={{"listStyle":"none"}} key={i}><label>{item.title}</label></li>))}
      </ul>
      </div>
    )
  
}
export default GreenList;
