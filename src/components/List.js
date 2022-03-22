import React from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"


function List(){
    // const dispatch=useDispatch();
    const texts=useSelector((state)=>state.textarea.items);

   


    console.log(texts)
    return (
        <div className='header' >
            <div style={{"background":"yellow"}}>Yellow List</div>
      <ul>
          {texts.map((item,i)=>item.color==="yellow"&&(<div style={{"width":"100px"}}><li className={item.color} style={{"listStyle":"none"}} key={i}><label >{item.title}</label></li></div>))}
      </ul>
      </div>
    )
  
}
export default List;
